// function to post data
export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

const toIndianCurrency = (amount) => {
  return isNaN(Number(amount)) === false
    ? Number(amount).toLocaleString("en-IN")
    : (0).toLocaleString("en-In");
};

export { toIndianCurrency };
