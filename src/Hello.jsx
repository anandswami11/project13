// import { render } from "@testing-library/react";
import React from "react";
//  import mobale2 from './Images/mobale2.webp'
class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            iphoneList: [
                
                {
                    id: 1,
                    img:'https://rukminim1.flixcart.com/image/312/312/l3rmzrk0/mobile/2/l/k/-original-imagetmebhg9thpv.jpeg?q=70',
                    name: 'realme GT 2 (Paper White, 128 GB)',
                    price: '23,999',
                    price1: '39,999',
                    price2:'40% off',
                   star1: '(10,519)',
                    star: '4.3',
                },
                {
                    id: 2,
                    img: 'https://rukminim1.flixcart.com/image/312/312/l3rmzrk0/mobile/m/o/3/-original-imagetmeb3y23xhb.jpeg?q=70',
                    // img: rketplac24fd6d99_40_VKQAC8JJSL3T_MC.MOBGDAT7JZRCGFMB&ppt=clp&ppn=mobile-phones-store&ssid=a7voevt3m80000001687951114884&otracker=clp_pmu_v2_Realme%2Bsmartphones_1_40.productCard.PMU_V2_realme%2BGT%2B2%2B%2528Paper%2BWhite%252C%2B128%2BGB%2529_mobile-phones-store_MOBGDAT7JZRCGFMB_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Realme%2Bsmartphones_LIST_productCard_cc_1_NA_view-all&cid=MOBGDAT7JZRCGFMB',
                    name: 'realme GT 2 (Steel Black, 128 GB)',
                    price: '23,999',
                    price1: '39,999',
                    price2:'40% off',
                   star1: '(10,519)',
                    star: '4.3',
                },

                {
                    id: 3,
                    img: 'https://rukminim1.flixcart.com/image/312/312/l1dwknk0/mobile/f/t/x/-original-imagcyj4unsxhadw.jpeg?q=70',
                    name: 'realme C31 (Steel Black, 128, GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 4,
                    img: 'https://rukminim1.flixcart.com/image/312/312/kzogn0w0/mobile/f/v/c/-original-imagbmf2hbxazyf3.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 5,
                    img: 'https://rukminim1.flixcart.com/image/312/312/kzogn0w0/mobile/f/v/c/-original-imagbmf2hbxazyf3.jpeg?q=70',
                    name: 'realme 9 Pro+ 5G (Midnight Black, 256 GB)',
                    price: '21,999',
                    price1: '31,999',
                    price2:'31% off',
                   star1: '(32,933)',
                    star: '4.4',
                },
                {
                    id: 6,
                    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/a/x/f5-5g-mzb0e7kin-poco-original-imagpep3dcnkbxp4.jpeg?q=70',
                    name: 'POCO F5 5G (Snowstorm White, 256 GB)  ',
                    price: '29,999',
                    price1: '34,999',
                    price2:'14% off',
                   star1: '(3,492)',
                    star: '4.2',
                },
                {
                    id: 7,
                    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 8,
                    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 9,
                    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/0/c/galaxy-f14-5g-sm-e146blvgins-samsung-original-imagnzdkxyfqhd6r.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 10,
                    img: 'https://rukminim1.flixcart.com/image/312/312/l30hmkw0/mobile/w/j/o/galaxy-s21-fe-5g-sm-g990ewziinu-samsung-original-image8dzwv3bch4k.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 11,
                    img: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 12,
                    img: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 13,
                    img: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 14,
                    img: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 15,
                    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 16,
                    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/q/e/g13-pawv0027in-motorola-original-imagz4rb7zgfjejf.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 17,
                     img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/2/s/g/-original-imagq35cvc36ahur.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 18,
                     img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 19,
                     img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/g/w/note-12-5g-mzb0eiain-redmi-original-imagpgr9ngapjhxq.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 20,
                     img: 'https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/a/6/b/-original-imagc7tdwfp2gz4h.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 21,
                     img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 22,
                     img: 'https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/8/9/n/-original-imagc7tmhcbrarpk.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 23,
                     img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 24,
                     img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/s/b/-original-imaggg5sk9zpp8hs.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
                {
                    id: 25,
                     img: 'https://rukminim1.flixcart.com/image/312/312/l1zc6fk0/mobile/u/7/w/f21-pro-cph2363-oppo-original-imagdf4jphscz9jz.jpeg?q=70',
                    name: 'realme C31 (Light Silver, 32 GB)',
                    price: '8,049',
                    price1: '10,999',
                    price2:'26% off',
                   star1: '(48,175)',
                    star: '4.5',
                },
            ]
        }
    }

render(){
    return(
        <>
        <div className="listiphone">
            {/* <div className="main"> */}
            {this.state.iphoneList.map( (list) => (
               <div className="list" key={list.id} >
               <div id="img12"><div><img src={list.img} className="img" alt="photo12"/></div> <div className="name"> {list.name} </div></div>
              
               <div><span className="star">{list.star}<span class="fa fa-star star4"></span></span><span className="star1">{list.star1}</span>
               </div>
                <div className="price1"><span className="price">₹{list.price}</span> <span className="star1">₹{list.price1}</span><span className="price2">{list.price2}</span></div>
                </div>
                // </div>
            ))}
        </div>
        </>
    )
  }
}
export default Hello