import { httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class AppService {
  private _url = countriesList;
  enterdCountry = signal<string>('');

  private _countryListResourse = httpResource<string>(() => `${this._url}`);
  countries = computed(() => this._countryListResourse.value() ?? []);
}

export const countriesList = [
  { id: 1, name: 'Afghanistan', code: 'AF' },
  { id: 2, name: 'Albania', code: 'AL' },
  { id: 3, name: 'Algeria', code: 'DZ' },
  { id: 4, name: 'Andorra', code: 'AD' },
  { id: 5, name: 'Angola', code: 'AO' },
  { id: 6, name: 'Antigua and Barbuda', code: 'AG' },
  { id: 7, name: 'Argentina', code: 'AR' },
  { id: 8, name: 'Armenia', code: 'AM' },
  { id: 9, name: 'Australia', code: 'AU' },
  { id: 10, name: 'Austria', code: 'AT' },
  { id: 11, name: 'Azerbaijan', code: 'AZ' },
  { id: 12, name: 'Bahamas', code: 'BS' },
  { id: 13, name: 'Bahrain', code: 'BH' },
  { id: 14, name: 'Bangladesh', code: 'BD' },
  { id: 15, name: 'Barbados', code: 'BB' },
  { id: 16, name: 'Belarus', code: 'BY' },
  { id: 17, name: 'Belgium', code: 'BE' },
  { id: 18, name: 'Belize', code: 'BZ' },
  { id: 19, name: 'Benin', code: 'BJ' },
  { id: 20, name: 'Bhutan', code: 'BT' },
  { id: 21, name: 'Bolivia', code: 'BO' },
  { id: 22, name: 'Bosnia and Herzegovina', code: 'BA' },
  { id: 23, name: 'Botswana', code: 'BW' },
  { id: 24, name: 'Brazil', code: 'BR' },
  { id: 25, name: 'Brunei', code: 'BN' },
  { id: 26, name: 'Bulgaria', code: 'BG' },
  { id: 27, name: 'Burkina Faso', code: 'BF' },
  { id: 28, name: 'Burundi', code: 'BI' },
  { id: 29, name: 'Cabo Verde', code: 'CV' },
  { id: 30, name: 'Cambodia', code: 'KH' },
  { id: 31, name: 'Cameroon', code: 'CM' },
  { id: 32, name: 'Canada', code: 'CA' },
  { id: 33, name: 'Central African Republic', code: 'CF' },
  { id: 34, name: 'Chad', code: 'TD' },
  { id: 35, name: 'Chile', code: 'CL' },
  { id: 36, name: 'China', code: 'CN' },
  { id: 37, name: 'Colombia', code: 'CO' },
  { id: 38, name: 'Comoros', code: 'KM' },
  { id: 39, name: 'Congo, Democratic Republic of the', code: 'CD' },
  { id: 40, name: 'Congo, Republic of the', code: 'CG' },
  { id: 41, name: 'Costa Rica', code: 'CR' },
  { id: 42, name: "Côte d'Ivoire", code: 'CI' },
  { id: 43, name: 'Croatia', code: 'HR' },
  { id: 44, name: 'Cuba', code: 'CU' },
  { id: 45, name: 'Cyprus', code: 'CY' },
  { id: 46, name: 'Czech Republic', code: 'CZ' },
  { id: 47, name: 'Denmark', code: 'DK' },
  { id: 48, name: 'Djibouti', code: 'DJ' },
  { id: 49, name: 'Dominica', code: 'DM' },
  { id: 50, name: 'Dominican Republic', code: 'DO' },
  { id: 51, name: 'East Timor', code: 'TL' },
  { id: 52, name: 'Ecuador', code: 'EC' },
  { id: 53, name: 'Egypt', code: 'EG' },
  { id: 54, name: 'El Salvador', code: 'SV' },

  { id: 55, name: 'Equatorial Guinea', code: 'GQ' },
  { id: 56, name: 'Eritrea', code: 'ER' },
  { id: 57, name: 'Estonia', code: 'EE' },
  { id: 58, name: 'Eswatini', code: 'SZ' },
  { id: 59, name: 'Ethiopia', code: 'ET' },
  { id: 60, name: 'Fiji', code: 'FJ' },
  { id: 61, name: 'Finland', code: 'FI' },
  { id: 62, name: 'France', code: 'FR' },
  { id: 63, name: 'Gabon', code: 'GA' },
  { id: 64, name: 'Gambia', code: 'GM' },
  { id: 65, name: 'Georgia', code: 'GE' },
  { id: 66, name: 'Germany', code: 'DE' },
  { id: 67, name: 'Ghana', code: 'GH' },
  { id: 68, name: 'Greece', code: 'GR' },
  { id: 69, name: 'Grenada', code: 'GD' },
  { id: 70, name: 'Guatemala', code: 'GT' },
  { id: 71, name: 'Guinea', code: 'GN' },
  { id: 72, name: 'Guinea-Bissau', code: 'GW' },
  { id: 73, name: 'Guyana', code: 'GY' },
  { id: 74, name: 'Haiti', code: 'HT' },
  { id: 75, name: 'Honduras', code: 'HN' },
  { id: 76, name: 'Hungary', code: 'HU' },
  { id: 77, name: 'Iceland', code: 'IS' },
  { id: 78, name: 'India', code: 'IN' },
  { id: 79, name: 'Indonesia', code: 'ID' },
  { id: 80, name: 'Iran', code: 'IR' },
  { id: 81, name: 'Iraq', code: 'IQ' },
  { id: 82, name: 'Ireland', code: 'IE' },
  { id: 83, name: 'Israel', code: 'IL' },
  { id: 84, name: 'Italy', code: 'IT' },
  { id: 85, name: 'Jamaica', code: 'JM' },
  { id: 86, name: 'Japan', code: 'JP' },
  { id: 87, name: 'Jordan', code: 'JO' },
  { id: 88, name: 'Kazakhstan', code: 'KZ' },
  { id: 89, name: 'Kenya', code: 'KE' },
  { id: 90, name: 'Kiribati', code: 'KI' },
  { id: 91, name: 'Kuwait', code: 'KW' },
  { id: 92, name: 'Kyrgyzstan', code: 'KG' },
  { id: 93, name: 'Laos', code: 'LA' },
  { id: 94, name: 'Latvia', code: 'LV' },
  { id: 95, name: 'Lebanon', code: 'LB' },
  { id: 96, name: 'Lesotho', code: 'LS' },
  { id: 97, name: 'Liberia', code: 'LR' },
  { id: 98, name: 'Libya', code: 'LY' },
  { id: 99, name: 'Liechtenstein', code: 'LI' },
  { id: 100, name: 'Lithuania', code: 'LT' },
  { id: 101, name: 'Luxembourg', code: 'LU' },
  { id: 102, name: 'Madagascar', code: 'MG' },
  { id: 103, name: 'Malawi', code: 'MW' },
  { id: 104, name: 'Malaysia', code: 'MY' },
  { id: 105, name: 'Maldives', code: 'MV' },
  { id: 106, name: 'Mali', code: 'ML' },
  { id: 107, name: 'Malta', code: 'MT' },
  { id: 108, name: 'Marshall Islands', code: 'MH' },
  { id: 109, name: 'Mauritania', code: 'MR' },
  { id: 110, name: 'Mauritius', code: 'MU' },
  { id: 111, name: 'Mexico', code: 'MX' },
  { id: 112, name: 'Micronesia', code: 'FM' },
  { id: 113, name: 'Moldova', code: 'MD' },
  { id: 114, name: 'Monaco', code: 'MC' },
  { id: 115, name: 'Mongolia', code: 'MN' },
  { id: 116, name: 'Montenegro', code: 'ME' },
  { id: 117, name: 'Morocco', code: 'MA' },
  { id: 118, name: 'Mozambique', code: 'MZ' },
  { id: 119, name: 'Myanmar', code: 'MM' },
  { id: 120, name: 'Namibia', code: 'NA' },
  { id: 121, name: 'Nauru', code: 'NR' },
  { id: 122, name: 'Nepal', code: 'NP' },
  { id: 123, name: 'Netherlands', code: 'NL' },
  { id: 124, name: 'New Zealand', code: 'NZ' },
  { id: 125, name: 'Nicaragua', code: 'NI' },
  { id: 126, name: 'Niger', code: 'NE' },
  { id: 127, name: 'Nigeria', code: 'NG' },
  { id: 128, name: 'North Korea', code: 'KP' },
  { id: 129, name: 'North Macedonia', code: 'MK' },
  { id: 130, name: 'Norway', code: 'NO' },
  { id: 131, name: 'Oman', code: 'OM' },
  { id: 132, name: 'Pakistan', code: 'PK' },
  { id: 133, name: 'Palau', code: 'PW' },
  { id: 134, name: 'Panama', code: 'PA' },
  { id: 135, name: 'Papua New Guinea', code: 'PG' },
  { id: 136, name: 'Paraguay', code: 'PY' },
  { id: 137, name: 'Peru', code: 'PE' },
  { id: 138, name: 'Philippines', code: 'PH' },
  { id: 139, name: 'Poland', code: 'PL' },
  { id: 140, name: 'Portugal', code: 'PT' },
  { id: 141, name: 'Qatar', code: 'QA' },
  { id: 142, name: 'Romania', code: 'RO' },
  { id: 143, name: 'Russia', code: 'RU' },
  { id: 144, name: 'Rwanda', code: 'RW' },
  { id: 145, name: 'Saint Kitts and Nevis', code: 'KN' },
  { id: 146, name: 'Saint Lucia', code: 'LC' },
  { id: 147, name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { id: 148, name: 'Samoa', code: 'WS' },
  { id: 149, name: 'San Marino', code: 'SM' },
  { id: 150, name: 'Sao Tome and Principe', code: 'ST' },
  { id: 151, name: 'Saudi Arabia', code: 'SA' },
  { id: 152, name: 'Senegal', code: 'SN' },
  { id: 153, name: 'Serbia', code: 'RS' },
  { id: 154, name: 'Seychelles', code: 'SC' },
  { id: 155, name: 'Sierra Leone', code: 'SL' },
  { id: 156, name: 'Singapore', code: 'SG' },
  { id: 157, name: 'Slovakia', code: 'SK' },
  { id: 158, name: 'Slovenia', code: 'SI' },
  { id: 159, name: 'Solomon Islands', code: 'SB' },
  { id: 160, name: 'Somalia', code: 'SO' },
  { id: 161, name: 'South Africa', code: 'ZA' },
  { id: 162, name: 'South Korea', code: 'KR' },
  { id: 163, name: 'South Sudan', code: 'SS' },
  { id: 164, name: 'Spain', code: 'ES' },
  { id: 165, name: 'Sri Lanka', code: 'LK' },
  { id: 166, name: 'Sudan', code: 'SD' },
  { id: 167, name: 'Suriname', code: 'SR' },
  { id: 168, name: 'Sweden', code: 'SE' },
  { id: 169, name: 'Switzerland', code: 'CH' },
  { id: 170, name: 'Syria', code: 'SY' },
  { id: 171, name: 'Taiwan', code: 'TW' },
  { id: 172, name: 'Tajikistan', code: 'TJ' },
  { id: 173, name: 'Tanzania', code: 'TZ' },
  { id: 174, name: 'Thailand', code: 'TH' },
  { id: 175, name: 'Togo', code: 'TG' },
  { id: 176, name: 'Tonga', code: 'TO' },
  { id: 177, name: 'Trinidad and Tobago', code: 'TT' },
  { id: 178, name: 'Tunisia', code: 'TN' },
  { id: 179, name: 'Turkey', code: 'TR' },
  { id: 180, name: 'Turkmenistan', code: 'TM' },
];
