import {
  forwardRef,
  useState,
  type CSSProperties,
  type ImgHTMLAttributes,
  type SyntheticEvent,
} from 'react'

export const imageWidths = [320, 480, 640, 750, 828, 1080, 1200, 1600, 1920, 2560] as const

export interface ImageLoaderParams {
  src: string
  width: number
  quality?: number
}

export type ImageLoader = (params: ImageLoaderParams) => string

export interface SunnyImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'height' | 'loading' | 'src' | 'width'> {
  alt: string
  src: string
  width?: number
  height?: number
  fill?: boolean
  loader?: ImageLoader
  quality?: number
  priority?: boolean
  loading?: 'eager' | 'lazy'
  placeholder?: 'empty' | 'blur'
  blurDataURL?: string
  onLoadingComplete?: (image: HTMLImageElement) => void
}

function uniqueWidths(width?: number, sizes?: string): number[] {
  if (sizes?.includes('vw') || width === undefined) {
    return [...imageWidths]
  }

  return [width, width * 2]
}

export const Image = forwardRef<HTMLImageElement, SunnyImageProps>(
  function Image(
    {
      alt,
      blurDataURL,
      fill = false,
      height,
      loader,
      loading,
      onLoad,
      onLoadingComplete,
      placeholder = 'empty',
      priority = false,
      quality,
      sizes,
      src,
      style,
      width,
      ...props
    },
    ref,
  ) {
    const [loaded, setLoaded] = useState(false)

    if (!fill && (width === undefined || height === undefined)) {
      throw new Error('sunny-img: width and height are required unless fill is true.')
    }

    if (placeholder === 'blur' && !blurDataURL) {
      throw new Error('sunny-img: blurDataURL is required when placeholder is "blur".')
    }

    const widths = uniqueWidths(width, sizes)
    const resolvedSrc = loader
      ? loader({ src, width: widths.at(-1) ?? width ?? imageWidths[0], quality })
      : src
    const srcSet = loader
      ? widths.map((candidate) => `${loader({ src, width: candidate, quality })} ${candidate}w`).join(', ')
      : undefined
    const blurStyles: CSSProperties =
      placeholder === 'blur' && !loaded
        ? {
            backgroundImage: `url("${blurDataURL}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            filter: 'blur(16px)',
            transform: 'scale(1.04)',
          }
        : {}
    const fillStyles: CSSProperties = fill
      ? {
          bottom: 0,
          height: '100%',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
        }
      : {}

    function handleLoad(event: SyntheticEvent<HTMLImageElement>): void {
      setLoaded(true)
      onLoad?.(event)
      onLoadingComplete?.(event.currentTarget)
    }

    return (
      <img
        {...props}
        ref={ref}
        alt={alt}
        data-sunny-img=""
        decoding="async"
        fetchPriority={priority ? 'high' : props.fetchPriority}
        height={fill ? undefined : height}
        loading={loading ?? (priority ? 'eager' : 'lazy')}
        onLoad={handleLoad}
        sizes={sizes}
        src={resolvedSrc}
        srcSet={srcSet}
        style={{ ...fillStyles, ...blurStyles, ...style }}
        width={fill ? undefined : width}
      />
    )
  },
)
