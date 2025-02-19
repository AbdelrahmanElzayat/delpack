export async function fetchProducts(searchParams) {
  const query = new URLSearchParams(searchParams).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/products?${query}`
  );

  let errorMessage = "Failed to fetch products";

  if (!res.ok) {
    try {
      const errorData = await res.json(); // محاولة قراءة الخطأ من السيرفر      
      if (errorData?.data && errorData?.data?.length === 0) {
        return {
          products: [],
          meta: {
            current_page: 1,
            last_page: 1,
            per_page: 10,
            total: 0,
            more: false,
          },
        };
      }
      errorMessage = errorData?.message || errorMessage;
      console.error("Server Error:", errorData); // طباعة كامل الخطأ
    } catch (error) {
      console.error("Error parsing server response:", error);
    }
    throw new Error(errorMessage);
  }

  const data = await res.json();
  return {
    products: data.data.products,
    meta: data.data.meta,
  };
}

// export const fetchProducts = async (page) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/products?page=${page}`,
//     {
//       cache: "no-store", // عشان يكون Server-side
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch products");

//   const data = await res.json();
//   return {
//     products: data.data.products,
//     meta: data.data.meta,
//   };
// };
export const fetchCategories = async (lang = "en") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/categories`,
    {
      // cache: "no-store", // عشان يكون Server-side
      headers: {
        "Content-Type": "application/json",
        lang: lang, // إرسال اللغة في الهيدرز
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");

  const data = await res.json();
  return {
    categories: data.data,
  };
};
export const fetchBanners = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/banners`,
    // {
    //   cache: "no-store", // عشان يكون Server-side
    // }
  );

  if (!res.ok) console.log(res);
  ;

  const data = await res.json();
  return {
    banners: data.data,
  };
};
export const fetchHomeMedia = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/home/media`,
    // {
    //   cache: "no-store", // عشان يكون Server-side
    // }
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
      // cache: "no-store", // لضمان تحديث البيانات
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
    // cache: "no-store", // لضمان تحديث البيانات
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
export const fetchNewDetails = async ({ lang = "en", id }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/new/${id}`,
    {
      // cache: "no-store", // 🛠 تحديث البيانات دائماً
      headers: {
        "Content-Type": "application/json",
        lang, // 🛠 تصحيح إرسال اللغة
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();
  return {
    blog: data.data, // 🛠 غيرنا `new` إلى `news`
  };
};
