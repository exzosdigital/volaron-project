"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// API Key do Volaron Store Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "1a58e914e4e647c9b9b99c7d3cd39cba");

export function RenderBuilderContent(props: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  return props.content || isPreviewing ? (
    <BuilderComponent {...props} />
  ) : (
    <DefaultErrorPage statusCode={404} />
  );
}

export { builder };