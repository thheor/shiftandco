import { useState } from "react";

export function Test() {
  const [name, setName] = useState("before");

  return (
    <>
      <button
        onClick={() => {
          fetch(
            "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/package.json",
            {
              method: "GET",
            },
          )
            .then((res) => res.json())
            .then((data) => setName(data.version))
            .catch((err) => console.error("Fetch error:", err));
        }}
        className="px-2 bg-blue-200"
      >
        Click
      </button>
      <p>{name}</p>
      <img
        src="https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/man.webp"
        alt="man.webp"
        loading="lazy"
      />
    </>
  );
}
