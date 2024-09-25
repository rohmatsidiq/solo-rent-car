import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";

export default function page() {
  const dataCar = [
    {
      name: "Toyota Alphard",
      image:
        "https://cdn.pixabay.com/photo/2024/03/31/02/36/wey80-8665913_1280.jpg",
    },
    {
      name: "Toyota Avanza",
      image:
        "https://imgx.gridoto.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark.png,5,5,60)/photo/2021/11/10/c982c859-54b5-4bac-8f0c-3489b16f-20211110051741.jpg",
    },
    {
      name: "Toyota Rush",
      image:
        "https://imgcdn.oto.com/large/gallery/exterior/38/1900/toyota-rush-front-angle-low-view-732737.jpg",
    },
    {
      name: "Daihatsu Xenia",
      image:
        "https://imgcdn.oto.com/large/gallery/exterior/7/2437/daihatsu-xenia-2022-front-angle-low-view-954960.jpg",
    },
    {
      name: "Daihatsu Terios",
      image:
        "https://asset.kompas.com/crops/XH-mbq6J8qNh8b8kDFnCI2g7KeI=/238x172:1319x892/1200x800/data/photo/2023/10/13/6528ff654c1fa.jpeg",
    },
    {
      name: "Daihatsu Luxio",
      image:
        "https://daihatsubalikpapan.id/wp-content/uploads/2019/03/daihatsu-luxio-front-angle-high-view-661232-768x512.jpg",
    },
  ];
  return (
    <div className="bg-slate-100">
      <div className="md:min-h-screen text-white bg-opacity-20 bg-car py-10 md:py-4 p-4 flex flex-col-reverse md:flex-row justify-center items-center md:gap-4 gap-10 rounded-bl-3xl rounded-br-3xl">
        <div className="w-full text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl text-yellow-500">
            PT SOLO RENT CAR
          </h1>
          <h1 className="mt-4 text-2xl font-bold">
            RENTAL MOBIL SOLO, MURAH, LEPAS KUNCI
          </h1>
          <p className="mt-4 text-xl">
            Solusi terbaik kebutuhan transportasi anda dan keluarga
          </p>
        </div>
        <div className="w-full">
          <img
            className="rounded-3xl"
            src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="car"
          />
        </div>
      </div>

      <div className="p-5 text-center py-10 max-w-5xl mx-auto">
        <h3 className="font-bold text-3xl text-yellow-500">
          Rental Mobil Solo
        </h3>
        <p className="mt-3 text-xl">
          Kami hadir untuk menjadi solusi kebutuhan transportasi Anda. Siap
          memberikan pelayanan terbaik dengan menyediakan kendaraan yang prima
          untuk keamanan dan kenyamanan Anda.
        </p>
        <p className="mt-3 text-xl">
          <b>Segera Hubungi kami untuk Booking Kendaraan Yang Anda Butuhkan!</b>
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-4 p-4 py-10">
        <div className="w-full max-h-[400px] overflow-hidden flex justify-center items-center rounded-3xl">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start text-center md:text-left">
          <p className="font-bold text-3xl text-yellow-500 text-center md:text-left w-full">
            Pengecekan Rutin
          </p>
          <p className="mt-4">
            Kami selalu melakukan pengecekan rutin untuk memastikan semua
            kendaraan dalam keadaan prima, aman dan nyaman.
          </p>
        </div>
      </div>

      <div className="flex max-w-5xl mx-auto flex-col md:flex-row-reverse gap-4 p-4 py-10">
        <div className="w-full max-h-[400px] overflow-hidden flex justify-center items-center rounded-3xl">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start text-center md:text-left">
          <p className="font-bold text-3xl text-yellow-500 text-center md:text-left w-full">
            Peremajaan
          </p>
          <p className="mt-4">
            Peremajaan kendaraan kami lalukan secara rutin. Sehingga kendaraan
            selalu dalam keadaan yang prima untuk kenyamaan Anda.
          </p>
        </div>
      </div>

      <div className="p-4 py-10 bg-car-2 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-500 text-center">
            SYARAT & KETENTUAN
          </h1>
          <div className="grid md:grid-cols-2 gap-3 mt-5">
            <div>
              <h3 className="font-bold text-xl">Syarat</h3>
              <p>- KTP</p>
              <p>- NPWP</p>
              <p>- SIM A</p>
              <p>- ID Card Kerja</p>
              <p>- Kartu Keluarga</p>
              <p>- Survei Tempat Tinggal</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">Ketentuan</h3>
              <p>- Booking Dp 50% Paling Lambat H-3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 py-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dataCar.map((e, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden">
              <div className="overflow-hidden flex justify-center items-center">
                <img src={e.image} alt={e.name} />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl">{e.name}</h3>
                <div className="mt-3">
                  <Button
                    icon={<WhatsAppOutlined />}
                    shape="round"
                    className="btn-custom"
                  >
                    BOOKING NOW
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-car text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 py-10">
          <div className="md:col-span-2">
            <h1 className="font-bold text-2xl">Hubungi Kami</h1>
            <p className="mt-3">
              Alamat: Jl. Jend. Urip Sumoharjo No.120, Purwodiningratan, Kec.
              Jebres, Kota Surakarta, Jawa Tengah 57129
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Button
              icon={<WhatsAppOutlined />}
              shape="round"
              className="btn-custom"
              size="large"
            >
              BOOKING NOW
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500 p-4 py-10 text-white text-center flex justify-center items-center flex-col gap-3">
        <h3 className="text-xl font-bold">FOLLOW US</h3>
        <div className="flex gap-1">
          <Button icon={<YoutubeOutlined />}></Button>
          <Button icon={<InstagramOutlined />}></Button>
          <Button icon={<FacebookOutlined />}></Button>
          <Button icon={<TikTokOutlined />}></Button>
        </div>
      </div>
    </div>
  );
}
