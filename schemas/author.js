export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'especialidad',
      title: 'Especialidad',
      description: 'Tipo de especialista (Ej: Endocrino, Dietista-Nutricionista...) No superar las dos palabras',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'web',
      title: 'Página Web',
      description: 'Enlace a su página web',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram (Opcional)',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook (Opcional)',
      type: 'string',
    },
    {
      name: 'doctoralia',
      title: 'Doctoralia (opcional)',
      type: 'string',
    },
    {
      name: 'youtube',
      title: 'Canal de Youtube (Opcional)',
      type: 'string',
    },
    {
      name: 'twitter',
      title: 'Twitter (Opcional)',
      type: 'string',
    },
    {
      name: 'primeraVisitaLink',
      title: 'Primera Visita - Link Calendly',
      type: 'string',
    },
    {
      name: 'primeraVisitaPrecio',
      title: 'Primera Visita - Precio en €',
      type: 'number',
    },
    {
      name: 'revisionLink',
      title: 'Revisión - Link Calendly',
      type: 'string',
    },
    {
      name: 'revisionPrecio',
      title: 'Revisión - Precio en €',
      type: 'number',
    },
    {
      name: 'consultaEmailLink',
      title: 'Consulta Email - Link Calendly',
      type: 'string',
    },
    {
      name: 'consultaEmailPrecio',
      title: 'Consulta Email - Precio en €',
      type: 'number',
    },
    {
      name: 'bonoOnlineLink',
      title: 'Bono Online - Link Calendly',
      type: 'string',
    },
    {
      name: 'bonoOnlinePrecio',
      title: 'Bono Online - Precio en €',
      type: 'number',
    },
    {
      name: 'comentario1',
      title: 'Comentario 1',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'comentario1autor',
      title: 'Autor del comentario 1',
      type: 'string',
    },
    {
      name: 'comentario1fuente',
      title: 'Fuente del comentario 1.',
      description: 'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
      type: 'string',
    },
    {
      name: 'comentario2',
      title: 'Comentario 2',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'comentario2autor',
      title: 'Autor del comentario 2',
      type: 'string',
    },
    {
      name: 'comentario2fuente',
      title: 'Fuente del comentario 2.',
      description: 'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
      type: 'string',
    },
    {
      name: 'comentario3',
      title: 'Comentario 3',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'comentario3autor',
      title: 'Autor del comentario 3',
      type: 'string',
    },
    {
      name: 'comentario3fuente',
      title: 'Fuente del comentario 3.',
      description: 'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
      type: 'string',
    },
    {
      name: 'comentario4',
      title: 'Comentario 4',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'comentario4autor',
      title: 'Autor del comentario 4',
      type: 'string',
    },
    {
      name: 'comentario4fuente',
      title: 'Fuente del comentario 4.',
      description: 'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
      type: 'string',
    },
    
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
