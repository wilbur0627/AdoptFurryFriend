import { filename } from "pathe/utils";

export const useImg = (viteMeta, name) => {
  const images = Object.fromEntries(
    Object.entries(viteMeta).map(([key, value]) => [
      filename(key),
      value.default,
    ]),
  );
  return images[name];
};
