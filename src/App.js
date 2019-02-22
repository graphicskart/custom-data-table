import React, { Component } from 'react';
import CustomDataTable from './Components/CustomDataTable'

import './index.css'

export function BindName (props) {
  return (
    <span>{props.first_name + ' ' +props.last_name}</span>
  )
}

export function BindImage (props) {
  return (
    <img src={props.avatar} width="40" />
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterQuery: '',
      loading: false,
      data: [
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Lehnerside",
            "first_name": "Eino",
            "last_name": "Auer",
            "country": "Papua New Guinea",
            "Email": "Anais@joanie.biz",
            "state": "Ohio",
            "street": "889 Judge Trail",
            "Id": 0,
            "zip_code": "85024"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "North Terrence",
            "first_name": "Gregoria",
            "last_name": "Jones",
            "country": "Gibraltar",
            "Email": "Hertha@webster.org",
            "state": "Virginia",
            "street": "312 Rachelle Mission",
            "Id": 1,
            "zip_code": "55017"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Port Adolphview",
            "first_name": "Julie",
            "last_name": "Krajcik",
            "country": "Lesotho",
            "Email": "Lloyd.Green@kenyon.info",
            "state": "Idaho",
            "street": "956 Jacobi Landing",
            "Id": 2,
            "zip_code": "23924-7228"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "New Averyburgh",
            "first_name": "Kurt",
            "last_name": "Bechtelar",
            "country": "Papua New Guinea",
            "Email": "Kaylin.McCullough@declan.com",
            "state": "Washington",
            "street": "3603 Jayce Crescent",
            "Id": 3,
            "zip_code": "89461"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "West Kaileehaven",
            "first_name": "Bettye",
            "last_name": "Ebert",
            "country": "Neutral Zone",
            "Email": "Mack_Prosacco@timmy.ca",
            "state": "Arkansas",
            "street": "8779 Borer Inlet",
            "Id": 4,
            "zip_code": "84773-4113"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "North Ismaelhaven",
            "first_name": "Quinton",
            "last_name": "Marks",
            "country": "Mexico",
            "Email": "Tracy@emerald.org",
            "state": "Wyoming",
            "street": "825 Gerard Junction",
            "Id": 5,
            "zip_code": "81730"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "South Ethyl",
            "first_name": "Candice",
            "last_name": "Becker",
            "country": "Saint Pierre and Miquelon",
            "Email": "Coby@manuel.us",
            "state": "Nebraska",
            "street": "1922 Goldner Islands",
            "Id": 6,
            "zip_code": "28386"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Javonteton",
            "first_name": "Noelia",
            "last_name": "Funk",
            "country": "Liberia",
            "Email": "Tristin_Kessler@vivienne.io",
            "state": "Kansas",
            "street": "5659 Bechtelar Pines",
            "Id": 7,
            "zip_code": "99584-1362"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "West Jasmin",
            "first_name": "Dax",
            "last_name": "Zemlak",
            "country": "Poland",
            "Email": "Carter.Treutel@macey.co.uk",
            "state": "Ohio",
            "street": "7369 Sonia Street",
            "Id": 8,
            "zip_code": "31170"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "East Virgiestad",
            "first_name": "Beryl",
            "last_name": "Maggio",
            "country": "Bolivia",
            "Email": "Katelin@alvena.me",
            "state": "New Hampshire",
            "street": "87718 Mann Causeway",
            "Id": 9,
            "zip_code": "19892-4833"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Deckowmouth",
            "first_name": "Marta",
            "last_name": "Oberbrunner",
            "country": "Philippines",
            "Email": "Noble@lorenzo.tv",
            "state": "Montana",
            "street": "57347 Bailey Summit",
            "Id": 10,
            "zip_code": "65567-4493"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Palmamouth",
            "first_name": "Tobin",
            "last_name": "Feil",
            "country": "Saint Helena",
            "Email": "Cristian_Parisian@aurelio.co.uk",
            "state": "Tennessee",
            "street": "8522 Ona Station",
            "Id": 11,
            "zip_code": "84018-7212"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "New Everardo",
            "first_name": "Virgie",
            "last_name": "Mitchell",
            "country": "Netherlands Antilles",
            "Email": "Bradley.Parker@maiya.net",
            "state": "New Jersey",
            "street": "808 Hane Ports",
            "Id": 12,
            "zip_code": "88993-5651"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Karleyside",
            "first_name": "Celestine",
            "last_name": "Gleason",
            "country": "Kiribati",
            "Email": "Mustafa.Connelly@erna.tv",
            "state": "New Mexico",
            "street": "81340 Elroy Village",
            "Id": 13,
            "zip_code": "42290"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Goyetteside",
            "first_name": "Hermina",
            "last_name": "Cruickshank",
            "country": "Monaco",
            "Email": "Wilbert_Murazik@loyal.name",
            "state": "Hawaii",
            "street": "24289 Erik Crescent",
            "Id": 14,
            "zip_code": "09829-6804"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Port Vallie",
            "first_name": "Lurline",
            "last_name": "O'Reilly",
            "country": "Union of Soviet Socialist Republics",
            "Email": "Adelbert@malachi.me",
            "state": "Tennessee",
            "street": "42632 Kshlerin ",
            "Id": 15,
            "zip_code": "20422-2285"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "New Abbigailmouth",
            "first_name": "Molly",
            "last_name": "Lind",
            "country": "Hungary",
            "Email": "Candelario_Homenick@karson.biz",
            "state": "Hawaii",
            "street": "4044 Rohan Mill",
            "Id": 16,
            "zip_code": "73481"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "East Fritz",
            "first_name": "Lilyan",
            "last_name": "Stroman",
            "country": "Slovakia",
            "Email": "Douglas@penelope.biz",
            "state": "New Mexico",
            "street": "58058 Zane Dam",
            "Id": 17,
            "zip_code": "61069-2386"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "East Annieside",
            "first_name": "Sallie",
            "last_name": "Dach",
            "country": "Guadeloupe",
            "Email": "Kathryne@evans.co.uk",
            "state": "Virginia",
            "street": "163 DuBuque Flat",
            "Id": 18,
            "zip_code": "14254"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Lake Korbin",
            "first_name": "Turner",
            "last_name": "Vandervort",
            "country": "Wallis and Futuna",
            "Email": "Liliana@jalyn.com",
            "state": "Hawaii",
            "street": "550 Kiel Crescent",
            "Id": 19,
            "zip_code": "23105-8550"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Danemouth",
            "first_name": "Valentina",
            "last_name": "Langworth",
            "country": "Mauritania",
            "Email": "Jayce@aryanna.co.uk",
            "state": "Virginia",
            "street": "7509 Hayes Shoals",
            "Id": 20,
            "zip_code": "22530"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Port Mariam",
            "first_name": "Clifford",
            "last_name": "Reinger",
            "country": "Sri Lanka",
            "Email": "Arlene.Johns@adrien.biz",
            "state": "Virginia",
            "street": "32595 Theresa Street",
            "Id": 21,
            "zip_code": "41787-2485"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "New Dennisville",
            "first_name": "Arvid",
            "last_name": "Grant",
            "country": "Réunion",
            "Email": "Ellsworth.Dach@jayson.info",
            "state": "Arkansas",
            "street": "69181 Alivia Ferry",
            "Id": 22,
            "zip_code": "96225"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Corbinfurt",
            "first_name": "Johnson",
            "last_name": "Dare",
            "country": "El Salvador",
            "Email": "Grover_Dietrich@noe.tv",
            "state": "Maryland",
            "street": "0752 Abdiel Mountain",
            "Id": 23,
            "zip_code": "23683-0587"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Fayfort",
            "first_name": "Herminia",
            "last_name": "Hermiston",
            "country": "U.S. Virgin Islands",
            "Email": "Isaac@osvaldo.biz",
            "state": "Oklahoma",
            "street": "3417 Crist Ports",
            "Id": 24,
            "zip_code": "21372-9565"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "South Evans",
            "first_name": "Alivia",
            "last_name": "Klocko",
            "country": "Panama",
            "Email": "Alexandro.Jewess@alycia.tv",
            "state": "Alabama",
            "street": "1360 Witting Expressway",
            "Id": 25,
            "zip_code": "03072-7892"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "New Lenora",
            "first_name": "Lavonne",
            "last_name": "Bruen",
            "country": "Swaziland",
            "Email": "Emanuel@reanna.ca",
            "state": "Missouri",
            "street": "3748 Buster Track",
            "Id": 26,
            "zip_code": "41522"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Kuphalmouth",
            "first_name": "Rebeca",
            "last_name": "Jakubowski",
            "country": "Cocos [Keeling] Islands",
            "Email": "Dolly@rollin.io",
            "state": "Wyoming",
            "street": "5521 Kling Prairie",
            "Id": 27,
            "zip_code": "98490"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "Paucekchester",
            "first_name": "Olen",
            "last_name": "Mayert",
            "country": "China",
            "Email": "Freda.Bartoletti@enola.tv",
            "state": "Mississippi",
            "street": "583 Ruthe Tunnel",
            "Id": 28,
            "zip_code": "92734-0366"
          },
          {
            "avatar" : 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
            "city": "North Maye",
            "first_name": "Anya",
            "last_name": "Labadie",
            "country": "Antigua and Barbuda",
            "Email": "Emanuel.Wuckert@annabelle.net",
            "state": "Washington",
            "street": "8309 Tremayne Run",
            "Id": 29,
            "zip_code": "45410"
          }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <CustomDataTable
          data={this.state.data}
          loading={this.state.loading}
          columns={[
              {
                header:'Avatar', 
                component: <BindImage />,
                value: '',
                component_props: {avatar: 'avatar'}, 
                sortable:false
              },
              {
                header:'Full Name', 
                component: <BindName />,
                value: 'first_name',
                component_props: {first_name: 'first_name', last_name: 'last_name'}, 
                style:{width:'470px'},
                sortable:true
              },
              {header:'First Name', value:'first_name', style:{width:'470px'},sortable:true},
              {header:'Last Name', value:'last_name', style:{width:'470px'},sortable:true},
              {header:'Action', component:<a href="">View Detail</a>, style:{width:'470px'}}
          ]}
          filterQuery={this.state.filterQuery}
      />
      </div>
    );
  }
}

export default App;
