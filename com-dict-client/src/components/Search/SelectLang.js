import React from "react";
import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function SelectLang() {
  return (
    <Select
      bordered={false}
      showSearch
      className="select_style"
      // style={{ width: 120 }}
      size="middle"
      placeholder="Language"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="AF">Afrikaans</Option>
      <Option value="SQ">Albanian</Option>
      <Option value="AR">Arabic</Option>
      <Option value="HY">Armenian</Option>
      <Option value="EU">Basque</Option>
      <Option value="BN">Bengali</Option>
      <Option value="BG">Bulgarian</Option>
      <Option value="CA">Catalan</Option>
      <Option value="KM">Cambodian</Option>
      <Option value="ZH">Chinese (Mandarin)</Option>
      <Option value="HR">Croatian</Option>
      <Option value="CS">Czech</Option>
      <Option value="DA">Danish</Option>
      <Option value="NL">Dutch</Option>
      <Option value="EN">English</Option>
      <Option value="ET">Estonian</Option>
      <Option value="FJ">Fiji</Option>
      <Option value="FI">Finnish</Option>
      <Option value="FR">French</Option>
      <Option value="KA">Georgian</Option>
      <Option value="DE">German</Option>
      <Option value="EL">Greek</Option>
      <Option value="GU">Gujarati</Option>
      <Option value="HE">Hebrew</Option>
      <Option value="HI">Hindi</Option>
      <Option value="HU">Hungarian</Option>
      <Option value="IS">Icelandic</Option>
      <Option value="ID">Indonesian</Option>
      <Option value="GA">Irish</Option>
      <Option value="IT">Italian</Option>
      <Option value="JA">Japanese</Option>
      <Option value="JW">Javanese</Option>
      <Option value="KO">Korean</Option>
      <Option value="LA">Latin</Option>
      <Option value="LV">Latvian</Option>
      <Option value="LT">Lithuanian</Option>
      <Option value="MK">Macedonian</Option>
      <Option value="MS">Malay</Option>
      <Option value="ML">Malayalam</Option>
      <Option value="MT">Maltese</Option>
      <Option value="MI">Maori</Option>
      <Option value="MR">Marathi</Option>
      <Option value="MN">Mongolian</Option>
      <Option value="NE">Nepali</Option>
      <Option value="NO">Norwegian</Option>
      <Option value="FA">Persian</Option>
      <Option value="PL">Polish</Option>
      <Option value="PT">Portuguese</Option>
      <Option value="PA">Punjabi</Option>
      <Option value="QU">Quechua</Option>
      <Option value="RO">Romanian</Option>
      <Option value="RU">Russian</Option>
      <Option value="SM">Samoan</Option>
      <Option value="SR">Serbian</Option>
      <Option value="SK">Slovak</Option>
      <Option value="SL">Slovenian</Option>
      <Option value="ES">Spanish</Option>
      <Option value="SW">Swahili</Option>
      <Option value="SV">Swedish </Option>
      <Option value="TA">Tamil</Option>
      <Option value="TT">Tatar</Option>
      <Option value="TE">Telugu</Option>
      <Option value="TH">Thai</Option>
      <Option value="BO">Tibetan</Option>
      <Option value="TO">Tonga</Option>
      <Option value="TR">Turkish</Option>
      <Option value="UK">Ukrainian</Option>
      <Option value="UR">Urdu</Option>
      <Option value="UZ">Uzbek</Option>
      <Option value="VI">Vietnamese</Option>
      <Option value="CY">Welsh</Option>
      <Option value="XH">Xhosa</Option>
    </Select>
  );
}

export default SelectLang;
