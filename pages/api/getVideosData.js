import cloudinary from 'cloudinary';

const x = {
  resources: [
  {
  asset_id: "7de1b6bb22128344f67174618d0d9a9e",
  public_id: "samples/pexels-kelly-lacy-9722139_ywfmii",
  format: "mp4",
  version: 1637361441,
  resource_type: "video",
  type: "upload",
  created_at: "2021-11-19T22:37:21Z",
  bytes: 4470972,
  width: 1280,
  height: 720,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361441/samples/pexels-kelly-lacy-9722139_ywfmii.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361441/samples/pexels-kelly-lacy-9722139_ywfmii.mp4"
  },
  {
  asset_id: "884e8b9f189a781129448924661ab6fd",
  public_id: "samples/pexels-koolshooters-6976210_qcxkzn",
  format: "mp4",
  version: 1637361395,
  resource_type: "video",
  type: "upload",
  created_at: "2021-11-19T22:36:35Z",
  bytes: 4838774,
  width: 720,
  height: 960,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361395/samples/pexels-koolshooters-6976210_qcxkzn.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361395/samples/pexels-koolshooters-6976210_qcxkzn.mp4"
  },
  {
  asset_id: "4dde656dfc6c356e8dbdd864bdff867e",
  public_id: "samples/pexels-karolina-grabowska-6837579_w9zqnb",
  format: "mp4",
  version: 1637361282,
  resource_type: "video",
  type: "upload",
  created_at: "2021-11-19T22:34:42Z",
  bytes: 1665939,
  width: 720,
  height: 1366,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361282/samples/pexels-karolina-grabowska-6837579_w9zqnb.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361282/samples/pexels-karolina-grabowska-6837579_w9zqnb.mp4"
  },
  {
  asset_id: "756367a45ef29bbbc348216da9b9c70f",
  public_id: "samples/pexels-lisa-9963201_isfrdm",
  format: "mp4",
  version: 1637361247,
  resource_type: "video",
  type: "upload",
  created_at: "2021-11-19T22:34:07Z",
  bytes: 800972,
  width: 640,
  height: 360,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361247/samples/pexels-lisa-9963201_isfrdm.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361247/samples/pexels-lisa-9963201_isfrdm.mp4"
  },
  {
  asset_id: "23be43d124debfab41cb25581b909ef4",
  public_id: "samples/pexels-c-technical-5822792_xzx8dc",
  format: "mp4",
  version: 1637361220,
  resource_type: "video",
  type: "upload",
  created_at: "2021-11-19T22:33:40Z",
  bytes: 2679521,
  width: 960,
  height: 540,
  url: "http://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361220/samples/pexels-c-technical-5822792_xzx8dc.mp4",
  secure_url: "https://res.cloudinary.com/ddmm5ofs1/video/upload/v1637361220/samples/pexels-c-technical-5822792_xzx8dc.mp4"
  },
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
  rate_limit_reset_at: "2021-11-19T23:00:00.000Z",
  rate_limit_remaining: 492
  }
  

cloudinary.v2.config({ 
  cloud_name: 'ddmm5ofs1', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});



export default async function getData(req,res) {
  try {
    const re = await cloudinary.v2.api.resources({ resource_type: 'video' });
    console.log({re})
    return res.json({data:x.resources })
    /* return res.json(re.resources) */
  } catch (error) {
    return res.json({message:error.message})
  }
}