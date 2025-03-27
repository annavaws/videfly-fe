import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
});

export { poppins, nunito };
