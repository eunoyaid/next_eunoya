import * as yup from 'yup'

export const advancedSchema = yup.object().shape({
    name: yup.string().required('perlu di isi agar mempelai mengenali mu :)'),
    isHadir: yup.boolean().oneOf([true], 'konfrimasi kehadiran mu'),
    doa: yup.string().required('kamu belum memberi doa terbaik untuk pasangan :)')
})