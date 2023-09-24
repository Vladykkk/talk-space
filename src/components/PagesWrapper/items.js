import { nanoid } from "nanoid";

import groups from "../../img/menu/groups.svg";
import profile from "../../img/menu/profile.svg";
import messages from "../../img/menu/messages.svg";
import settings from "../../img/menu/settings.svg";

const items = [
  {
    id: nanoid(),
    link: "/groups",
    ariaLabel: "",
    pictureSrc: groups,
    text: "Групи",
  },
  {
    id: nanoid(),
    link: "",
    ariaLabel: "",
    pictureSrc: profile,
    text: "Мій профіль",
  },
  {
    id: nanoid(),
    link: "",
    ariaLabel: "",
    pictureSrc: messages,
    text: "Повідомлення",
  },
  {
    id: nanoid(),
    link: "",
    ariaLabel: "",
    pictureSrc: settings,
    text: "Налаштування",
  },
];

export default items;
