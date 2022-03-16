export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'description',
      title: 'Descripción (Resumen) CAMPO OBLIGATORIO',
      description: 'haz una breve descripción de no más de dos líneas del artículo o utiliza las dos primeras líneas seguidas de 3 puntos',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Imagen de portada',
      description: 'CAMPO OBLIGATORIO',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body1',
      title: 'Párrafo 1',
      description: 'CAMPO OBLIGATORIO, no añadir imagenes aquí',
      type: 'blockContent',
    },
    {
      name: 'articleImage1',
      title: 'Imagen 1 (Opcional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body2',
      title: 'Párrafo 2 (Opcional)',
      description: 'no añadir imagenes aquí',
      type: 'blockContent',
    },
    {
      name: 'articleImage2',
      title: 'Imagen 2 (Opcional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body3',
      title: 'Párrafo 3',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
