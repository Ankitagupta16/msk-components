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
    value: 'Academic Detail',
    required: true
  },
  academic: {
    name: 'Academic Set',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Academic',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          degree: {
            name: 'Degree',
            type: propertyTypes.STRING,
            value: 'DEGREE',
            required: true
          },
          university: {
            name: 'University',
            type: propertyTypes.STRING,
            value: 'University or School Name',
            required: true
          },
          percentage: {
            name: 'Percentage',
            type: propertyTypes.NUMBER,
            value: 'Percentage %',
            required: true
          },
          year: {
            name: 'Year',
            type: propertyTypes.DATE,
            value: '(YYYY-YYYY)',
            required: true
          }
        }
      }
    ],
    required: true
  }
};

export default properties;