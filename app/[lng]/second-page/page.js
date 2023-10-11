import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useGetServerCoreCopy } from "../../i18n/utils";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  const { t: tCore } = await useGetServerCoreCopy();
  console.log(
    "tCoretCore server second page async",
    tCore("field.uploadFile.dragFileHere")
  );
  return (
    <>
      <main>
        <Header heading={t("h1")} />
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer lng={lng} path="/second-page" />
    </>
  );
}
