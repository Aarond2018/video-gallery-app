import cloudinary from 'cloudinary';

const x = {
  resources: [
  {
  asset_id: "3dc0ca132ce4d56ed020fb350c8ed836",
  public_id: "pexels-melike-b-9210539_1_te3goi",
  format: "mp4",
  version: 1637084544,
  resource_type: "video",
  type: "upload",
  created_at: "2021-11-16T17:42:24Z",
  bytes: 3262362,
  width: 540,
  height: 960,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1637084544/pexels-melike-b-9210539_1_te3goi.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1637084544/pexels-melike-b-9210539_1_te3goi.mp4"
  },
  {
  asset_id: "05bee72b140bd9b3e85e9324477fff79",
  public_id: "samples/elephants",
  format: "mp4",
  version: 1586458304,
  resource_type: "video",
  type: "upload",
  created_at: "2020-04-09T18:51:44Z",
  bytes: 38855178,
  width: 1920,
  height: 1080,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1586458304/samples/elephants.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1586458304/samples/elephants.mp4"
  },
  {
  asset_id: "7216b95f45a42746731cde73f2eeef00",
  public_id: "samples/sea-turtle",
  format: "mp4",
  version: 1586458301,
  resource_type: "video",
  type: "upload",
  created_at: "2020-04-09T18:51:41Z",
  bytes: 27932506,
  width: 1920,
  height: 1080,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1586458301/samples/sea-turtle.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1586458301/samples/sea-turtle.mp4"
  }
  ],
  rate_limit_allowed: 500,
  rate_limit_reset_at: "2021-11-16T19:00:00.000Z",
  rate_limit_remaining: 492
  }
  

cloudinary.v2.config({ 
  cloud_name: 'ddmm5ofs1', 
  api_key: '349758175856323', 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});



export default  async function getData(req,res) {
  try {
    /* const re = await cloudinary.v2.api.resources({ resource_type: 'video' }); */
    /* console.log({re}) */
    console.log("yippy")
    return res.json({data:x.resources })
  } catch (error) {
    return res.json({message:error.message})
  }
}