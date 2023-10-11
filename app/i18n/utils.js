import { isObject } from "lodash";
import { useTranslation as useClientTranslation } from "./client";
import { useTranslation as useServerTranslation } from ".";

const labels = {
  "field.recordCannotUpdated": {
    en: "The {{entityName}} cannot be updated",
    ar: "",
  },
  "field.recordEditedSuccessfully": {
    en: "The {{entityName}} has been successfully edited",
    ar: "",
  },
  "field.recordUpdatedSuccessfully": {
    en: "The {{entityName}} has been successfully updated",
    ar: "",
  },
  "app.saar": { en: "Saar", ar: "" },
  "headCells.selectedItem": { en: "Selected Item(s)", ar: "العناصر المحددة" },
  "field.uploadFile.serverError": { en: "Server Error", ar: "" },
  "field.uploadFile.somethingWentWrong": {
    en: "Something went wrong.",
    ar: "هناك خطأ ما.",
  },
  "field.uploadFile.tryAgain": { en: "Try again", ar: "حاول مرة أخري" },
  "field.uploadFile.uploadingFile": { en: "Uploading file", ar: "تحميل الملف" },
  "field.uploadFile.uploadingPhoto": {
    en: "Uploading photo",
    ar: "تحميل الصورة",
  },
  "modal.wantToCancel": {
    en: "Are you sure you want to cancel?",
    ar: "هل أنت متأكد أنك تريد إلغاء؟",
  },
  "field.uploadFile.browse": {
    en: "BROWSE",
    ar: "يتصفح",
  },
  "field.uploadFile.or": {
    en: "or",
    ar: "",
  },
  "field.uploadFile.dragFileHere": {
    en: "Drag file here",
    ar: "اسحب الملف هنا",
  },
  "field.uploadFile.delete": {
    en: "Delete",
    ar: "",
  },
  "field.uploadFile.areYouSureToDeleteThisFile": {
    en: "Are you sure to delete this file",
    ar: "",
  },
};

export const getSeparateLanguageLabels = (labels) => {
  const en = {};
  const ar = {};
  if (isObject(labels)) {
    Object.keys(labels).forEach((label) => {
      en[label] = labels[label].en;
      ar[label] = labels[label].ar;
    });
  }
  return { en, ar };
};

export const addNameSpaceResources = (nameSpaceKey, translations, i18n) => {
  const { en: enTranslation, ar: arTranslation } =
    getSeparateLanguageLabels(translations);
  console.log("i18ni18n", i18n);
  i18n?.addResourceBundle("en", `${nameSpaceKey}`, enTranslation);

  i18n?.addResourceBundle("ar", `${nameSpaceKey}`, arTranslation);
};

export const useGetCoreCopy = () => {
  const translate = useClientTranslation("en", "core");
  addNameSpaceResources("core", labels, translate.i18n);

  return translate;
};

export const useGetServerCoreCopy = async () => {
  // init i18n
  const translate = await useServerTranslation("en", "core");
  addNameSpaceResources("core", labels, translate.i18n);
  return translate;
};
