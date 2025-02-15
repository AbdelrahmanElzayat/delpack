import React from "react";

const ContactInfo = () => {
  return (
    <div className="pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="container">
        <div className="flex justify-center gap-4 md:gap-[100px] flex-col md:flex-row">
          <div className="address flex flex-col gap-10">
            <div className="addressInfo flex flex-col gap-3 md:gap-5 lg:gap-7">
              <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
                Address
              </h4>
              <a
                className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F] md:w-[70%]"
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35390.35252934878!2d31.151480236531626!3d30.78382763149614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c6f4a2199499%3A0x61fb471699306a6!2z2K_ZhNiq2Kcg2YXYtdixINmE2YTYqNmE2KfYs9iq2YrZgyDZiNin2YTYqtis2KfYsdipINmI2KfZhNiq2YjYstmK2LkgLSDYr9mE2KjYp9mDINi0LtmFLtmF!5e0!3m2!1sar!2seg!4v1738011375930!5m2!1sar!2seg"
                target="blank"
              >
                Meit Haway, Al Santah, El Qorasheya Rd, Gharbiya
              </a>
            </div>
            <div className="E-mailInfo flex flex-col gap-3 md:gap-5 lg:gap-7">
              <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
                E-mail
              </h4>
              <div className="emails flex flex-col">
                <a
                  className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                  href="mailto:Delta_egy@hotmail.com"
                  target="blank"
                >
                  Delta_egy@hotmail.com
                </a>
                <a
                  className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                  href="mailto:info@dc-egy.com"
                  target="blank"
                >
                  info@dc-egy.com
                </a>
              </div>
            </div>
          </div>
          <div className="phones">
            <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              Business phone
            </h4>
            <div className="flex flex-col gap-3">
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#0A6BAB]">
                  sales
                </h4>
                <div className="links flex flex-col">
                  <a
                    className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                    href="tel:+201012248667"
                    target="blank"
                  >
                    <bdi>+2 01012248667</bdi>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#0A6BAB]">
                  Tell
                </h4>
                <div className="links flex flex-col">
                  <a
                    className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                    href="tel:+20404340505"
                    target="blank"
                  >
                    <bdi>+2 0404340505</bdi>
                  </a>
                  <a
                    className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                    href="tel:+20404340505"
                    target="blank"
                  >
                    <bdi>+2 0404340505</bdi>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#0A6BAB]">
                  Mob
                </h4>
                <div className="links flex flex-col">
                  <a
                    className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                    href="tel:+201012248667"
                    target="blank"
                  >
                    <bdi>+2 01012248667</bdi>
                  </a>
                  <a
                    className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                    href="tel:+201012248667"
                    target="blank"
                  >
                    <bdi>+2 01012248667</bdi>
                  </a>
                  <a
                    className="font-light text-xs sm:text-sm md:text-lg lg:text-xl text-[#3F3F3F]"
                    href="tel:+201012248667"
                    target="blank"
                  >
                    <bdi>+2 01012248667</bdi>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
