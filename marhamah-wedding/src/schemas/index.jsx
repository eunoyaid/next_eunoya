import * as yup from "yup";

export const advancedSchema = yup.object().shape({
  name: yup.string().required("perlu di isi agar mempelai mengenali mu :)"),
  isHadir: yup
    .string()
    .oneOf(
      ["ya, saya bisa berhadir", "Maaf, saya ada kesibukan lain"],
      "konfrimasi kehadiran mu"
    ),
  doa: yup
    .string()
    .required("kamu belum memberi doa terbaik untuk pasangan :)"),
});
