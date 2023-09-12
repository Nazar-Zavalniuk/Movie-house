// This function clears a string of invalid characters and a default value
// that acts as a hint for the user. The string thus cleared can contain only
// letters of the Latin, Russian and Ukrainian alphabets including spaces,
// numbers and the following symbols:
// (,), (.), ('), ("), (:), (;), (№), (&), (/), (%), (-), (+), (#), (?), (!).
export const sanitize = (str) => {
  if (str === "Введіть назву фільму...") {
    return "";
  } else {
    return str.replace(/[^a-zA-Zа-яА-ЯіІїЇєЄґҐё0-9 ,.'":;№&/%\-+#?!]/gu, "");
  }
};

// This function modifies the string by adding a backslash character
// before each character so that the modified string can be sent to the
// http request, avoiding errors that are associated with the presence of
// special characters in the string.
export const validate = (str) => {
  return str.replace(/[,.'":;№&/%+#?!]/g, "\\$&");
};
