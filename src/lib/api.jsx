export const fetchProducts = async (page) => {
  const res = await fetch(
    `https://delpack.poultrystore.net/api/products?page=${page}`,
    {
      cache: "no-store", // عشان يكون Server-side
    }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return {
    products: data.data.products,
    meta: data.data.meta,
  };
};
export const fetchBanners = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/banners`,
    {
      cache: "no-store", // عشان يكون Server-side
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Banners");

  const data = await res.json();
  return {
    banners: data.data,
  };
};
export const fetchHomeMedia = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/home/media`,
    {
      cache: "no-store", // عشان يكون Server-side
    }
  );

  if (!res.ok) throw new Error("Failed to fetch media");

  const data = await res.json();
  return {
    media: data.data,
  };
};
export const fetchAbout = async (lang = "en") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/about-us`,
    {
      cache: "no-store", // لضمان تحديث البيانات
      headers: {
        "Content-Type": "application/json",
        lang: lang, // إرسال اللغة في الهيدرز
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch about-us");

  const data = await res.json();
  return {
    about: data.data,
  };
};
export const fetchNews = async (lang = "en") => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/news`, {
    cache: "no-store", // لضمان تحديث البيانات
    headers: {
      "Content-Type": "application/json",
      lang: lang, // إرسال اللغة في الهيدرز
    },
  });

  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();
  return {
    news: data.data,
  };
};
