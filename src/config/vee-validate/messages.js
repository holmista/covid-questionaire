import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";

localize("ka", {
  fields: {
    name: {
      required: "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
      min: "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
      max: "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან",
      alpha: "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
    },
    surname: {
      required: "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
      min: "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
      max: "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან",
      alpha: "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
    },
    email: {
      required: "თქვენ მიერ შეყვანილი მეილი არასწორია",
      email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
      redberry_email:
        "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)",
    },
  },
});

configure({
  generateMessage: localize({
    ka,
  }),
});
