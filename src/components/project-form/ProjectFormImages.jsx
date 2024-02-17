import { useState, useEffect } from 'react';

import { useForm, useFieldArray } from 'react-hook-form';

import { FaTrashAlt } from 'react-icons/fa';

function ProjectFormImages({ project }) {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      pictures: project?.pictures.map((image) => ({ image })) || [],
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const {
    fields: pictures,
    append: appendPicture,
    remove: removePicture,
  } = useFieldArray({
    control,
    name: 'pictures',
  });

  const [selectedImage, setSelectedImage] = useState();
  const [selectedFile, setSelectedFile] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedFile(file);
    const fileUrl = URL.createObjectURL(file);
    setSelectedImage(fileUrl);

    appendPicture({ image: fileUrl });
  };

  const onSubmit = (data) => {
    console.log(data.pictures);
    console.log(selectedImage);
    console.log(selectedFile);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="input-data ">
        <div className="label inline center">Images supplémentaires</div>
        <div className="inline pic-block">
          {pictures.map((picture, index) => (
            <div key={picture.id} className="picture">
              <img
                src={picture.image}
                alt={`Image ${index + 1}`}
                className="picture"
              />
              <button
                type="button"
                onClick={() => removePicture(index)}
                className="remove-button"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
        <label htmlFor="pic">Ajouter une image</label>
        <input
          type="file"
          id="pictures"
          accept="image/png, image/jpeg, image/webp"
          {...register('pic')}
          className={errors.pic?.message ? 'error-input file' : 'file'}
          onChange={handleImageChange}
        />

        <p className="error">{errors.hardSkills?.message}</p>
      </div>

      <button type="submit" disabled={!isDirty || !isValid}>
        Enregistrer les modifications
      </button>
    </form>
  );
}

export default ProjectFormImages;
