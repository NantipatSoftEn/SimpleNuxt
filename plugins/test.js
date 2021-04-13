const arr = [
  {
    age: 22222,
    description: "Orochimaru",
    facebook: "Orochimaru",
    instrgram: "Orochimaru",
    name: "Orochimaru",
    url:
      "https://firebasestorage.googleapis.com/v0/b/haram-nuxt.appspot.com/o/Orochimaru?alt=media&token=3418e769-294d-4dca-ab66-a18b52d801c2"
  },
  {
    age: 2222,
    description: "sadasdas",
    facebook: "asdasd",
    instrgram: "asdasdasd",
    name: "ASDASD",
    url:
      "https://firebasestorage.googleapis.com/v0/b/haram-nuxt.appspot.com/o/ASDASD?alt=media&token=2173a21c-f2d4-440f-b682-1dd8c8153cfb"
  },
  {
    age: 22,
    description: "ตัวเล็ก",
    facebook: "profile.php?id=100003713666937",
    instrgram: "pamnpsn",
    name: "Pam Napatsanan",
    url:
      "https://firebasestorage.googleapis.com/v0/b/haram-nuxt.appspot.com/o/Pam%20Napatsanan?alt=media&token=48233714-5b87-4ffe-bde2-8717d4aaf1f8"
  },
  {
    age: 22,
    description: "ขาว",
    facebook: "ja.ne.397948",
    instrgram: "genxnp",
    name: "Jane Treenapa",
    url:
      "https://firebasestorage.googleapis.com/v0/b/haram-nuxt.appspot.com/o/Jane%20Treenapa?alt=media&token=d66d960c-3ee5-44ee-935e-87d7bf683b94"
  },
  {
    age: 222,
    description: "sdfsdfdsf",
    facebook: "fsdfsdfsdf",
    instrgram: "dsfsdfsdf",
    name: "dsfsdfsd",
    url:
      "https://firebasestorage.googleapis.com/v0/b/haram-nuxt.appspot.com/o/dsfsdfsd?alt=media&token=3d745fa8-6dd2-4515-bfa1-8a7c936b656e"
  }
];

const newArr = [];
while (arr.length) newArr.push(arr.splice(0, 3));

console.log(newArr);
