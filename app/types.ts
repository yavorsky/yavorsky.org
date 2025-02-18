export type PageProps<
  T extends Record<string, string | number> = Record<string, string | number>,
> = {
  params: Promise<{ id: string } & T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
