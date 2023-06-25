import { Loading, Notify, QSpinnerBars } from "quasar";

export function showLoading(message) {
  Loading.show({
    message: message,
    spinner: QSpinnerBars,
    spinnerColor: "teal-6"
  })
}

export function hideLoading() {
  Loading.hide();
}

export function showPositiveNotify(message, action) {
  Notify.create({
    message: message,
    type: "positive",
    actions: [
      {
        icon: "close",
        color: "white"
      }
    ],
    onDismiss: action
  })
}

export function showNegativeNotify(message, action) {
  Notify.create({
    message: message,
    type: "negative",
    actions: [
      {
        icon: "close",
        color: "white"
      }
    ],
  })
}
