import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Experience',
    required: true
  },
  experience: {
    name: 'Experience Set',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Experience',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Designation',
            required: true
          },
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'Company',
            required: true
          },
          employmentType: {
            name: 'Employment Type',
            type: propertyTypes.STRING,
            value: 'Employment Type',
            required: true
          },
          location: {
            name: 'Location',
            type: propertyTypes.STRING,
            value: 'Location',
            required: true
          },
          period:{
            name: 'Period',
            type: propertyTypes.STRING,
            value:'(YYYY-YYYY)',
            required:true
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            required: false
          }
        }
      }
    ],
    required: true
  }
};

export default properties;