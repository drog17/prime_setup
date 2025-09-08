'use client'

import React, { useRef, useState } from 'react'
import styles from './AddNewState.module.scss'

interface AddNewStateProps {
  onClose: () => void
}

export default function AddNewState({ onClose }: AddNewStateProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPreview(null)
      setError(null)
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setError('Обложка статьи должна быть не больше 2 MB')
      setPreview(null)
      return
    }

    setError(null)
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()  || !text.trim() ||  !date.trim() || !preview) {
      setError("⚠️ Заполните все поля перед публикацией")
      return
    }

    setError(null)
    alert("✅ Статья успешно опубликована!")
    onClose() 
  }

  return (
    <div className={styles.addstate}>
      <h1>Добавить новую статью</h1>
      <div className={styles.contend}>
        <form onSubmit={handleSubmit}>
          <div className={styles.zagavok}>
            <label>Заголовок статьи</label>
            <div className={styles.text}>
              <input
                type="text"
                placeholder="Введите заголовок статьи..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.obloshka}>
            <label>Обложка статьи</label>
            <div className={styles.uploadBox} onClick={openFileDialog}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                aria-label="Загрузить обложку статьи"
                onChange={handleImageChange}
                className={styles.fileInput}
              />

              {preview ? (
                <img src={preview} alt="Превью обложки" className={styles.previewImage} />
              ) : (
                <div className={styles.placeholder}>
                  <img src="/icons/image.svg" alt="иконка загрузки" />
                  <button type="button">Загрузите изображение для статьи</button>
                  <p>Обложка статьи должна быть не больше 2 MB</p>
                </div>
              )}
            </div>
          </div>

          <div className={styles.textarea}>
            <label>Текст статьи</label>
            <div className={styles.texte}>
              <textarea
                placeholder="Текст статьи..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className={styles.data}>
            <label>Дата публикации</label>
            <div className={styles.publik}>
              <input
                type="text"
                placeholder="Введите дату"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.btn}>
            <button
              type="button"
              className={styles.otmena}
              onClick={onClose}
            >
              Отмена
            </button>
            <button type="submit" className={styles.sohranit}>
              Опубликовать
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}