export const loginValidation = (string) => {
  if (string.length === 0) {
    return { message: "Поле не повинно бути порожнім.", state: false };
  }

  const firstChar = string[0];
  const lastChar = string[string.length - 1];

  if (firstChar === " " || lastChar === " ") {
    return {
      message: "Логін не повинен починатися або закінчуватися відступом.",
      state: false,
    };
  }

  const pattern = /^[a-zA-Z0-9]*(?:\s[a-zA-Z0-9]*)?$/;
  const isLoginValid = pattern.test(string);

  if (!isLoginValid) {
    return {
      message:
        "Логін має бути у форматі (A-z, 0-9). Наприклад: 'John Wick' або 'john4'.",
      state: false,
    };
  } else {
    return { message: "", state: true };
  }
};

export const passwordValidation = (string) => {
  if (string.length === 0) {
    return { message: "Поле не повинно бути порожнім.", state: false };
  }

  if (string.length < 8) {
    return {
      message: "Пароль повинен мати щонайменше 8 символів.",
      state: false,
    };
  } else {
    return { message: "", state: true };
  }
};
