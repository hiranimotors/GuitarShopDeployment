const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const User = require("../models/User.model");
const MONGO_URI = require("../db/index");

const data = [
  {
    productType: "electric guitar",
    productName: "Fender Stratocaster",
    manufacturer: "Fender",
    model: "Fender Player Stratocaster MN Black",
    price: 649,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/36/366988/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369609/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369588/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369589/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369591/1200/preview.jpg",
    ],
    colour: ["black"],
    description:
      "Fender Player Stratocaster MN is a guitar designed for serious musicians. Its look and feel are superbly streamlined, meaning it is a true pleasure to play and to hold. From the three Player Series Alnico 5 single coil pickups to the sleek maple neck and fretboard - everything is authentic. You'll be able to coax a bright, punchy, highly detailed tone from this guitar with ease. And it's easy to fall in love with its charming aesthetic. If you're looking for a model which will give your riffs that classic Stratocaster shine and sparkle - this is it.",
    frets: 22,
    pickups: "Player Series Alnico single coil",
  },
  {
    productType: "electric guitar",
    productName: "Fender Stratocaster",
    manufacturer: "Fender",
    model: "Fender Player Stratocaster MN Black",
    price: 649,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/36/366988/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369609/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369588/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369589/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369591/1200/preview.jpg",
    ],
    colour: ["black"],
    description:
      "Fender Player Stratocaster MN is a guitar designed for serious musicians. Its look and feel are superbly streamlined, meaning it is a true pleasure to play and to hold. From the three Player Series Alnico 5 single coil pickups to the sleek maple neck and fretboard - everything is authentic. You'll be able to coax a bright, punchy, highly detailed tone from this guitar with ease. And it's easy to fall in love with its charming aesthetic. If you're looking for a model which will give your riffs that classic Stratocaster shine and sparkle - this is it.",
    frets: 22,
    pickups: "Player Series Alnico single coil",
  },
  {
    productType: "electric guitar",
    productName: "Fender Stratocaster",
    manufacturer: "Fender",
    model: "Fender Player Stratocaster MN Black",
    price: 649,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/36/366988/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369609/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369588/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369589/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369591/1200/preview.jpg",
    ],
    colour: ["black"],
    description:
      "Fender Player Stratocaster MN is a guitar designed for serious musicians. Its look and feel are superbly streamlined, meaning it is a true pleasure to play and to hold. From the three Player Series Alnico 5 single coil pickups to the sleek maple neck and fretboard - everything is authentic. You'll be able to coax a bright, punchy, highly detailed tone from this guitar with ease. And it's easy to fall in love with its charming aesthetic. If you're looking for a model which will give your riffs that classic Stratocaster shine and sparkle - this is it.",
    frets: 22,
    pickups: "Player Series Alnico single coil",
  },
  {
    productType: "electric guitar",
    productName: "Fender Stratocaster",
    manufacturer: "Fender",
    model: "Fender Player Stratocaster MN Black",
    price: 649,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/36/366988/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369609/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369588/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369589/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369591/1200/preview.jpg",
    ],
    colour: ["black"],
    description:
      "Fender Player Stratocaster MN is a guitar designed for serious musicians. Its look and feel are superbly streamlined, meaning it is a true pleasure to play and to hold. From the three Player Series Alnico 5 single coil pickups to the sleek maple neck and fretboard - everything is authentic. You'll be able to coax a bright, punchy, highly detailed tone from this guitar with ease. And it's easy to fall in love with its charming aesthetic. If you're looking for a model which will give your riffs that classic Stratocaster shine and sparkle - this is it.",
    frets: 22,
    pickups: "Player Series Alnico single coil",
  },
  {
    productType: "electric guitar",
    productName: "Fender Stratocaster",
    manufacturer: "Fender",
    model: "Fender Player Stratocaster MN Black",
    price: 649,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/36/366988/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369609/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369588/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369589/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/36/369591/1200/preview.jpg",
    ],
    colour: ["black"],
    description:
      "Fender Player Stratocaster MN is a guitar designed for serious musicians. Its look and feel are superbly streamlined, meaning it is a true pleasure to play and to hold. From the three Player Series Alnico 5 single coil pickups to the sleek maple neck and fretboard - everything is authentic. You'll be able to coax a bright, punchy, highly detailed tone from this guitar with ease. And it's easy to fall in love with its charming aesthetic. If you're looking for a model which will give your riffs that classic Stratocaster shine and sparkle - this is it.",
    frets: 22,
    pickups: "Player Series Alnico single coil",
  },

  {
    productType: "acoustic guitar",
    productName: "Yamaha F310",
    manufacturer: "Yamaha",
    model: "Yamaha F310 Acoustic, Natural",
    price: 125,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681431/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681433/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681434/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681435/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681436/1200/preview.jpg",
    ],
    colour: ["natural"],
    description:
      "The Yamaha F310 is everything you've been looking for. It combines superb value for money with Yamaha's long heritage of creating high-quality instruments. This F310 Acoustic is no exception to their meticulous standards. Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down.",
    frets: 20,
    pickups: "n/a",
  },
  {
    productType: "acoustic guitar",
    productName: "Yamaha F310",
    manufacturer: "Yamaha",
    model: "Yamaha F310 Acoustic, Natural",
    price: 125,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681431/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681433/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681434/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681435/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681436/1200/preview.jpg",
    ],
    colour: ["natural"],
    description:
      "The Yamaha F310 is everything you've been looking for. It combines superb value for money with Yamaha's long heritage of creating high-quality instruments. This F310 Acoustic is no exception to their meticulous standards. Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down.",
    frets: 20,
    pickups: "n/a",
  },
  {
    productType: "acoustic guitar",
    productName: "Yamaha F310",
    manufacturer: "Yamaha",
    model: "Yamaha F310 Acoustic, Natural",
    price: 125,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681431/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681433/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681434/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681435/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681436/1200/preview.jpg",
    ],
    colour: ["natural"],
    description:
      "The Yamaha F310 is everything you've been looking for. It combines superb value for money with Yamaha's long heritage of creating high-quality instruments. This F310 Acoustic is no exception to their meticulous standards. Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down.",
    frets: 20,
    pickups: "n/a",
  },
  {
    productType: "acoustic guitar",
    productName: "Yamaha F310",
    manufacturer: "Yamaha",
    model: "Yamaha F310 Acoustic, Natural",
    price: 125,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681431/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681433/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681434/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681435/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681436/1200/preview.jpg",
    ],
    colour: ["natural"],
    description:
      "The Yamaha F310 is everything you've been looking for. It combines superb value for money with Yamaha's long heritage of creating high-quality instruments. This F310 Acoustic is no exception to their meticulous standards. Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down.",
    frets: 20,
    pickups: "n/a",
  },
  {
    productType: "acoustic guitar",
    productName: "Yamaha F310",
    manufacturer: "Yamaha",
    model: "Yamaha F310 Acoustic, Natural",
    price: 125,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681431/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681433/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681434/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681435/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681436/1200/preview.jpg",
    ],
    colour: ["natural"],
    description:
      "The Yamaha F310 is everything you've been looking for. It combines superb value for money with Yamaha's long heritage of creating high-quality instruments. This F310 Acoustic is no exception to their meticulous standards. Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down.",
    frets: 20,
    pickups: "n/a",
  },
  {
    productType: "acoustic guitar",
    productName: "Yamaha F310",
    manufacturer: "Yamaha",
    model: "Yamaha F310 Acoustic, Natural",
    price: 125,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681431/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681433/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681434/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681435/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/68/681436/1200/preview.jpg",
    ],
    colour: ["natural"],
    description:
      "The Yamaha F310 is everything you've been looking for. It combines superb value for money with Yamaha's long heritage of creating high-quality instruments. This F310 Acoustic is no exception to their meticulous standards. Explore a rich, dynamic, well-rounded tone. Versatile with a sweet, melodic character that allows you to play almost any genre or style with great ease. And, with a traditional dreadnought body, your acoustic voice is loud, full, and beautifully dynamic. Experience a smooth, slick feel thanks to a slim, comfortable neck that's easier on your fingertips. Melodic and extremely playable - you won't want to put it down.",
    frets: 20,
    pickups: "n/a",
  },

  {
    productType: "amplifier",
    productName: "Blackstar Valve Combo",
    manufacturer: "Blackstar",
    model: "Blackstar HT-5R MkII Valve Combo Amp",
    price: 449,
    images: [
      "https://images.media-allrecipes.com/images/75131.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008f2.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008b.jpg?h=500&maxwidth=770&scale=canvas&bg=ffffff&quality=70",
    ],
    colour: ["black"],
    description: `Killer tones and innovative features make the HT-5R MkII the ultimate studio and practice valve amp. The MkII’s completely new design takes the performance of this award-winning tone machine to a whole new level. To make the HT-5R MkII sound full and toneful even at the lowest volume levels, we designed a low powered push-pull power amp which produces the crunch and break-up characteristics of a traditional 100W output stage, but at a much lower volume. This is achieved by the use of a 12BH7 dual triode valve in push-pull configuration producing 5 Watts output, which is rich in valve harmonics and compression.`,
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "amplifier",
    productName: "Blackstar Valve Combo",
    manufacturer: "Blackstar",
    model: "Blackstar HT-5R MkII Valve Combo Amp",
    price: 449,
    images: [
      "https://images.media-allrecipes.com/images/75131.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008f2.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008b.jpg?h=500&maxwidth=770&scale=canvas&bg=ffffff&quality=70",
    ],
    colour: ["black"],
    description: `Killer tones and innovative features make the HT-5R MkII the ultimate studio and practice valve amp. The MkII’s completely new design takes the performance of this award-winning tone machine to a whole new level. To make the HT-5R MkII sound full and toneful even at the lowest volume levels, we designed a low powered push-pull power amp which produces the crunch and break-up characteristics of a traditional 100W output stage, but at a much lower volume. This is achieved by the use of a 12BH7 dual triode valve in push-pull configuration producing 5 Watts output, which is rich in valve harmonics and compression.`,
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "amplifier",
    productName: "Blackstar Valve Combo",
    manufacturer: "Blackstar",
    model: "Blackstar HT-5R MkII Valve Combo Amp",
    price: 449,
    images: [
      "https://images.media-allrecipes.com/images/75131.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008f2.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008b.jpg?h=500&maxwidth=770&scale=canvas&bg=ffffff&quality=70",
    ],
    colour: ["black"],
    description: `Killer tones and innovative features make the HT-5R MkII the ultimate studio and practice valve amp. The MkII’s completely new design takes the performance of this award-winning tone machine to a whole new level. To make the HT-5R MkII sound full and toneful even at the lowest volume levels, we designed a low powered push-pull power amp which produces the crunch and break-up characteristics of a traditional 100W output stage, but at a much lower volume. This is achieved by the use of a 12BH7 dual triode valve in push-pull configuration producing 5 Watts output, which is rich in valve harmonics and compression.`,
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "amplifier",
    productName: "Blackstar Valve Combo",
    manufacturer: "Blackstar",
    model: "Blackstar HT-5R MkII Valve Combo Amp",
    price: 449,
    images: [
      "https://images.media-allrecipes.com/images/75131.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008f2.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008b.jpg?h=500&maxwidth=770&scale=canvas&bg=ffffff&quality=70",
    ],
    colour: ["black"],
    description: `Killer tones and innovative features make the HT-5R MkII the ultimate studio and practice valve amp. The MkII’s completely new design takes the performance of this award-winning tone machine to a whole new level. To make the HT-5R MkII sound full and toneful even at the lowest volume levels, we designed a low powered push-pull power amp which produces the crunch and break-up characteristics of a traditional 100W output stage, but at a much lower volume. This is achieved by the use of a 12BH7 dual triode valve in push-pull configuration producing 5 Watts output, which is rich in valve harmonics and compression.`,
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "amplifier",
    productName: "Blackstar Valve Combo",
    manufacturer: "Blackstar",
    model: "Blackstar HT-5R MkII Valve Combo Amp",
    price: 449,
    images: [
      "https://images.media-allrecipes.com/images/75131.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008f2.jpg",
      "https://images.guitarguitar.co.uk/cdn/large/150/190110337378008b.jpg?h=500&maxwidth=770&scale=canvas&bg=ffffff&quality=70",
    ],
    colour: ["black"],
    description: `Killer tones and innovative features make the HT-5R MkII the ultimate studio and practice valve amp. The MkII’s completely new design takes the performance of this award-winning tone machine to a whole new level. To make the HT-5R MkII sound full and toneful even at the lowest volume levels, we designed a low powered push-pull power amp which produces the crunch and break-up characteristics of a traditional 100W output stage, but at a much lower volume. This is achieved by the use of a 12BH7 dual triode valve in push-pull configuration producing 5 Watts output, which is rich in valve harmonics and compression.`,
    frets: 0,
    pickups: "n/a",
  },

  {
    productType: "pedal",
    productName: "Boss Digital Delay",
    manufacturer: "BOSS",
    model: "Boss DD-3T Digital Delay",
    price: 130.25,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615443/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615444/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615445/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615447/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615448/1200/preview.jpg",
    ],
    colour: ["white", "black", "pink"],
    description:
      "An icon reborn. The Boss DD-3T Digital Delay Pedal is an enhanced version of the legendary DD-3. It maintains all of the distinctive, recognisable sound of the original - but with improved functionality that makes adding a touch of stunning delay to your music, completely simple. With delay times ranging from 12.5 to 800ms, there's a huge spectrum to play with. And if you need to quickly find the right sound, the delay has been split into three subdivisions for rapid setup. A relocated direct output jack next to the main output makes connecting the pedal in a wet/dry setup hassle free. And you can tap in delay tempos using the onboard switch. All in all, the DD-3T makes finding the right delay sound for you effortless.",
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "pedal",
    productName: "Boss Digital Delay",
    manufacturer: "BOSS",
    model: "Boss DD-3T Digital Delay",
    price: 130.25,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615443/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615444/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615445/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615447/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615448/1200/preview.jpg",
    ],
    colour: ["white", "black", "pink"],
    description:
      "An icon reborn. The Boss DD-3T Digital Delay Pedal is an enhanced version of the legendary DD-3. It maintains all of the distinctive, recognisable sound of the original - but with improved functionality that makes adding a touch of stunning delay to your music, completely simple. With delay times ranging from 12.5 to 800ms, there's a huge spectrum to play with. And if you need to quickly find the right sound, the delay has been split into three subdivisions for rapid setup. A relocated direct output jack next to the main output makes connecting the pedal in a wet/dry setup hassle free. And you can tap in delay tempos using the onboard switch. All in all, the DD-3T makes finding the right delay sound for you effortless.",
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "pedal",
    productName: "Boss Digital Delay",
    manufacturer: "BOSS",
    model: "Boss DD-3T Digital Delay",
    price: 130.25,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615443/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615444/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615445/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615447/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615448/1200/preview.jpg",
    ],
    colour: ["white", "black", "pink"],
    description:
      "An icon reborn. The Boss DD-3T Digital Delay Pedal is an enhanced version of the legendary DD-3. It maintains all of the distinctive, recognisable sound of the original - but with improved functionality that makes adding a touch of stunning delay to your music, completely simple. With delay times ranging from 12.5 to 800ms, there's a huge spectrum to play with. And if you need to quickly find the right sound, the delay has been split into three subdivisions for rapid setup. A relocated direct output jack next to the main output makes connecting the pedal in a wet/dry setup hassle free. And you can tap in delay tempos using the onboard switch. All in all, the DD-3T makes finding the right delay sound for you effortless.",
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "pedal",
    productName: "Boss Digital Delay",
    manufacturer: "BOSS",
    model: "Boss DD-3T Digital Delay",
    price: 130.25,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615443/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615444/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615445/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615447/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615448/1200/preview.jpg",
    ],
    colour: ["white", "black", "pink"],
    description:
      "An icon reborn. The Boss DD-3T Digital Delay Pedal is an enhanced version of the legendary DD-3. It maintains all of the distinctive, recognisable sound of the original - but with improved functionality that makes adding a touch of stunning delay to your music, completely simple. With delay times ranging from 12.5 to 800ms, there's a huge spectrum to play with. And if you need to quickly find the right sound, the delay has been split into three subdivisions for rapid setup. A relocated direct output jack next to the main output makes connecting the pedal in a wet/dry setup hassle free. And you can tap in delay tempos using the onboard switch. All in all, the DD-3T makes finding the right delay sound for you effortless.",
    frets: 0,
    pickups: "n/a",
  },
  {
    productType: "pedal",
    productName: "Boss Digital Delay",
    manufacturer: "BOSS",
    model: "Boss DD-3T Digital Delay",
    price: 130.25,
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615443/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615444/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615445/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615447/1200/preview.jpg",
      "https://d1aeri3ty3izns.cloudfront.net/media/61/615448/1200/preview.jpg",
    ],
    colour: ["white", "black", "pink"],
    description:
      "An icon reborn. The Boss DD-3T Digital Delay Pedal is an enhanced version of the legendary DD-3. It maintains all of the distinctive, recognisable sound of the original - but with improved functionality that makes adding a touch of stunning delay to your music, completely simple. With delay times ranging from 12.5 to 800ms, there's a huge spectrum to play with. And if you need to quickly find the right sound, the delay has been split into three subdivisions for rapid setup. A relocated direct output jack next to the main output makes connecting the pedal in a wet/dry setup hassle free. And you can tap in delay tempos using the onboard switch. All in all, the DD-3T makes finding the right delay sound for you effortless.",
    frets: 0,
    pickups: "n/a",
  },
];

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connection Made");
    Product.create(data);
  })
  .catch((error) => {
    console.log(error);
  });

// images
// amps

// fender 65 deluxe reverb
// https://cdn.webshopapp.com/shops/179375/files/385059382/image.jpg