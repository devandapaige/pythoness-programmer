export const supportEmail = 'help@pythonessprogrammer.com' as const

export const userMessages = {
  newsletter: {
    success:
      'You are on the list. Watch your inbox for Pythoness Perspective.',
    emailRequired: 'Email is required.',
    invalidEmail: 'Please enter a valid email address.',
    unavailable:
      'Signups are temporarily unavailable. Try again later or email help@pythonessprogrammer.com.',
    signupFailed:
      "We couldn't add your email. Check the address and try again, or email help@pythonessprogrammer.com if it keeps failing.",
    genericFailure:
      "Something interrupted your signup. Please try again.",
    network:
      "We couldn't reach the server. Check your connection and try again.",
  },
  store: {
    invalidEmailCheckout: 'Please enter a valid email before checkout.',
    invalidEmailFree: 'Please enter a valid email to access this free file.',
    productEmailRequired: 'Product and email are required.',
    checkoutStartFailed:
      "Checkout didn't start. Try again, or email help@pythonessprogrammer.com if you're still stuck.",
    freeDownloadFailed:
      "We couldn't start your download. Check your email and try again.",
    checkoutUnavailable: 'This product is not available for checkout.',
    freeProductNotFound: 'This free product was not found.',
    freeClaimSuccess: 'Thanks. Your file is ready to download.',
    receiptLinkIncomplete:
      'This receipt link is incomplete. Return to the store or check your email.',
    purchaseNotFound:
      "We couldn't find your purchase. Email help@pythonessprogrammer.com if you were charged.",
    paymentProcessing:
      "Payment hasn't finished processing yet. Refresh in a minute or check your email.",
    receiptLoadFailed:
      "We couldn't load your receipt from this link. If you were charged, email help@pythonessprogrammer.com with the email you used at checkout.",
    verifyPurchasePending:
      'Your payment is still processing. Refresh in a minute, or check your email for the download link.',
    downloadLinkExpired:
      'This download link has expired. Open the link from your purchase email or contact help@pythonessprogrammer.com.',
    paymentIncomplete: 'Payment is not completed.',
    paidProductNotFound: 'Paid product was not found.',
    checkoutSessionFailed: 'Unable to start checkout session.',
    genericCheckoutError:
      "Checkout didn't start. Try again, or email help@pythonessprogrammer.com if you're still stuck.",
    genericFreeClaimError:
      "We couldn't start your download. Check your email and try again.",
    genericReceiptError:
      "We couldn't load your receipt. Refresh the page or check your email for the download link.",
    genericPaidDownloadError:
      'Download failed. Use the link in your purchase email or contact help@pythonessprogrammer.com.',
  },
  clipboard: {
    copied: 'Copied!',
    copyFailed: "Copy didn't work—select the text and copy manually.",
    copyFailedWithShortcut:
      'Select the text and press ⌘C to copy.',
  },
} as const
