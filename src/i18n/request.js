import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = cookieStore.get("lang")?.value || "en"; // Default to 'en'

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default,
  };
});
