import { createFileRoute } from "@tanstack/react-router";
import * as contentData from "virtual:prestige/content/docs/reference/image-props";
import { ContentRoute } from "@lonik/prestige/ui";

export const Route = createFileRoute('/(prestige)/docs/reference/image-props')(ContentRoute(contentData));
