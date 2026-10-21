import React from "react";
import MarqueeText from "react-marquee-text";
import { toBanglaNumber, toBanglaUnit } from "../lib/utils";

export interface PriceChange {
  dir: "up" | "down" | "stable";
  pct: number;
}

export interface Product {
  id: number;
  nameBn: string;
  unit: string;
  image: string;
  today: number;
  change: PriceChange;
}

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  return (
    <>
      <div className="overflow-hidden border-y border-green-100 bg-white">
        <div className="flex items-center">
          <div className="min-w-0 flex-1 bg-green-50">
            <MarqueeText className="p-2" direction="right" duration={20}>
              {data.map((d: Product) => (
                <div
                  key={d.id}
                  className="flex shrink-0 items-center gap-2 border-r border-green-100 px-6 py-2"
                >
                  {/* Category */}
                  <span>{d.image}</span>
                  <span className="">{d.nameBn}</span>
                  {/* Price */}
                  <span className="">
                    ৳ {toBanglaNumber(d.today)}
                    <span className="text-gray-500">
                      /{toBanglaUnit(d.unit)}
                    </span>
                  </span>

                  {/* Price movement */}
                  <span
                    className={`flex items-center gap-1 rounded-md ${
                      d.change.dir === "up"
                        ? "text-red-600"
                        : d.change.dir === "down"
                          ? "text-green-600"
                          : " text-gray-600"
                    }`}
                  >
                    {d.change.dir === "up"
                      ? "▲"
                      : d.change.dir === "down"
                        ? "▼"
                        : "—"}
                    {toBanglaNumber(d.change.pct)}%
                  </span>
                </div>
              ))}
            </MarqueeText>
          </div>
        </div>
      </div>
    </>
  );
};
export default Marquee;
