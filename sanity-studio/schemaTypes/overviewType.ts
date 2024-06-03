import {defineField, defineType} from 'sanity'

export const overViewType = defineType({
  name: 'overview',
  title: 'Overview',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'A brief catchy headline',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'string',
      description: 'A short paragraph introducing the leadership team and the mission',
    }),
  ],
})
