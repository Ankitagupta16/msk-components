// Export the component in this file to display in the preview

import metadata from './metadata'

import Cover from './cover'
import Introduction from './introduction'
import Experience from './experience'
import Projects from './projects'
import Skillset from './skill-set'
import Academic from './academic'

const components = {
  Cover,
  Introduction,
  Academic,
  Experience,
  Projects,
  Skillset
}

const Resume = {
  metadata,
  components
}

export default Resume;