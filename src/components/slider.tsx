// src/components/Slider.jsx
import { useEffect, useState } from "react";
import "../css/slider.css";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://lh3.googleusercontent.com/fife/ALs6j_EvVC5-dCfwk2pOc6ggGU1n9mUCk7GHFoDv0QakXgtufOe3MuAzJ6e2e5Gta526frcAmtZQWCAfgeQ9sC_65DXOP5HkuiEfHLWgkiRPqQNoAIDWndUVYS2maj3x8j9otJN3B4H2sxYotK8mefCKWJexdmJxgV0ATQt5NKED2DYbMvDTHvEotB4w73XMoKEF4CWAZ2KAkW654rrGEj26P5yhiqBQrci1Y4IvRt04QPaGyi3_qCL_j9s4KScHc6YYPE5Ld3yhMhe4O5qbVf-cZaeKG-AjUJppPOnWaXf0SkNeTEuzdBRl75OVINidn0QVIzUHr3P4yRcG5X07QaDU_osU4AGdg-2uGv1SL3YJ7in_YkqH7X8EodYYnxO1_vHW3_kW7V4nzqLfEWg_yw7f-0W1I6KFzpkiRfeoX9ZEjMY4zuCHS71ItYKBXB8Evs4w2Q_tWt_19Apxc2Bhz1AOHcB3567AE_WMxkZkmv79hwbCdamzfhsrc7lCtjY_1PTzHDJeKt8go1xrNv_niRZYAyF2dl4aHktKSWhwGeD3njFiA5AQRNAuU_SM_N11hAJDvhl2cYfQPYFyOSZtPf3_u_7DsPpIPg23AZFIE3YoQlm51HzoWFlqaBZK1lTP94wbrlqFQ1y9QLqEDzCK4MpbQa-qHK7-L6DfRx6QLv92hXPKgHk-k5o1OHizLqKQdTH5jqoHUaIjWUqVjqPJ3i0Ki-76ukMvD-3p3YSVX8JueNz6V85jPn0bc8zyJYz5_lPGAtVvXgkTqZxAldQGLCtZvjU9rTKEbecOGR7hm9HToUkj0vBFQn3zJ3Qvly-6bGBVGVzwk7bT-jKbwmFWfDSjCiF-wxTInQivO7fXX-GUjbBeMDcqg4ZHG3NUaPZqrrF6mSb-5PUPkqK1rUISFAQpnMq4nQ0VkUK6o20ri-xr9K55_qW3R56mR81Ju1WmYLcyJjNprDUNcDQ2ECOdGtKm6TfvqL3awDW5RYnNhswWQWtx8KsYvFFyv8R3vVE0l-LHl1NxxB8yyO6nctoc6YTHt3cVTU0eOWWvsENYB5qSoZI-VB0s1TJ6_wEVwtdtlaweUkzxCedBGrTmkGlOrDsuUGh2G24SO040grx-6Oepm5a_Aoa2urxvO3GV57F-rm3CYI-XaHGvsERXdGv5qo9APXreYmEZ_8-y85CEyDgVZVgTf9VQWh9Ug7DUc21w_7RIBBdcaMbuX_PBhVMRDWaoEEvQn6wfBiMV78ig4Ck_7miAo5YEr7usYc0lDgdOgKd_BbGcGBtqLP4ZhLdH-KmjoJt8CrO3jlm-k2aG_RWZ9BVNtrO5QpqnrZGzvBZEmkEOSaaJDG6tNytVXM-PNQckzdBW-XAwOEewLzTfgj3WKeexvBkb7E2zvvVnvClrisummNkYrfEkN9vig5h77ktjG3aG0xQcMLUz2f3gZOVRbo3bLGKX6GinjG3fupPazA0mR0LnrhbY9mYhZTD3-9Mo1L2rVcA_EgPIX2B8yB21C7CuIV1ut2wTdxI5irB1DAMYdUH1UKWvbE2viGf9lrRuouy1GKyU8VUKCAg8fsGPUKUh8lCSI52eMleXKIZ00XB9HnPyDodxPKmzsKNRe3f--CPp8ZzB6fB9MD7ruqOlQt-y9mbOdfVO14V_j3Z-1FveZ97nIlW6WNQM5AWR5XpGL1YWRMR4vdZYLUZEz4ikLPtDu7iz4blXcFWeJsXXjZc=w1920-h927",
    layout: "",
    title: "Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn",
    description:
      "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500",
    button: {
      text: "Lern mehr",
      link: "products",
    },
  },
  {
    url: "https://lh3.googleusercontent.com/fife/ALs6j_EvVC5-dCfwk2pOc6ggGU1n9mUCk7GHFoDv0QakXgtufOe3MuAzJ6e2e5Gta526frcAmtZQWCAfgeQ9sC_65DXOP5HkuiEfHLWgkiRPqQNoAIDWndUVYS2maj3x8j9otJN3B4H2sxYotK8mefCKWJexdmJxgV0ATQt5NKED2DYbMvDTHvEotB4w73XMoKEF4CWAZ2KAkW654rrGEj26P5yhiqBQrci1Y4IvRt04QPaGyi3_qCL_j9s4KScHc6YYPE5Ld3yhMhe4O5qbVf-cZaeKG-AjUJppPOnWaXf0SkNeTEuzdBRl75OVINidn0QVIzUHr3P4yRcG5X07QaDU_osU4AGdg-2uGv1SL3YJ7in_YkqH7X8EodYYnxO1_vHW3_kW7V4nzqLfEWg_yw7f-0W1I6KFzpkiRfeoX9ZEjMY4zuCHS71ItYKBXB8Evs4w2Q_tWt_19Apxc2Bhz1AOHcB3567AE_WMxkZkmv79hwbCdamzfhsrc7lCtjY_1PTzHDJeKt8go1xrNv_niRZYAyF2dl4aHktKSWhwGeD3njFiA5AQRNAuU_SM_N11hAJDvhl2cYfQPYFyOSZtPf3_u_7DsPpIPg23AZFIE3YoQlm51HzoWFlqaBZK1lTP94wbrlqFQ1y9QLqEDzCK4MpbQa-qHK7-L6DfRx6QLv92hXPKgHk-k5o1OHizLqKQdTH5jqoHUaIjWUqVjqPJ3i0Ki-76ukMvD-3p3YSVX8JueNz6V85jPn0bc8zyJYz5_lPGAtVvXgkTqZxAldQGLCtZvjU9rTKEbecOGR7hm9HToUkj0vBFQn3zJ3Qvly-6bGBVGVzwk7bT-jKbwmFWfDSjCiF-wxTInQivO7fXX-GUjbBeMDcqg4ZHG3NUaPZqrrF6mSb-5PUPkqK1rUISFAQpnMq4nQ0VkUK6o20ri-xr9K55_qW3R56mR81Ju1WmYLcyJjNprDUNcDQ2ECOdGtKm6TfvqL3awDW5RYnNhswWQWtx8KsYvFFyv8R3vVE0l-LHl1NxxB8yyO6nctoc6YTHt3cVTU0eOWWvsENYB5qSoZI-VB0s1TJ6_wEVwtdtlaweUkzxCedBGrTmkGlOrDsuUGh2G24SO040grx-6Oepm5a_Aoa2urxvO3GV57F-rm3CYI-XaHGvsERXdGv5qo9APXreYmEZ_8-y85CEyDgVZVgTf9VQWh9Ug7DUc21w_7RIBBdcaMbuX_PBhVMRDWaoEEvQn6wfBiMV78ig4Ck_7miAo5YEr7usYc0lDgdOgKd_BbGcGBtqLP4ZhLdH-KmjoJt8CrO3jlm-k2aG_RWZ9BVNtrO5QpqnrZGzvBZEmkEOSaaJDG6tNytVXM-PNQckzdBW-XAwOEewLzTfgj3WKeexvBkb7E2zvvVnvClrisummNkYrfEkN9vig5h77ktjG3aG0xQcMLUz2f3gZOVRbo3bLGKX6GinjG3fupPazA0mR0LnrhbY9mYhZTD3-9Mo1L2rVcA_EgPIX2B8yB21C7CuIV1ut2wTdxI5irB1DAMYdUH1UKWvbE2viGf9lrRuouy1GKyU8VUKCAg8fsGPUKUh8lCSI52eMleXKIZ00XB9HnPyDodxPKmzsKNRe3f--CPp8ZzB6fB9MD7ruqOlQt-y9mbOdfVO14V_j3Z-1FveZ97nIlW6WNQM5AWR5XpGL1YWRMR4vdZYLUZEz4ikLPtDu7iz4blXcFWeJsXXjZc=w1920-h927",
    title: "ppppppppp",
    description: "ppppppppp.",
    button: {
      text: "Learn More",
      link: "",
    },
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slider">
      <div className="slide-content">
        <div>
          <img
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
          />
        </div>
        <div className="text-overlay">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].description}</p>
          {images[currentIndex].button && (
            
            <Link to={images[currentIndex].button.link}>
              <button className="slide-button">{images[currentIndex].button.text}</button>
            </Link>
          )}
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
