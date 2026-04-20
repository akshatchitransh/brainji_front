import { useEffect, useState } from "react"
import axios from "axios"
import { Backend_URI } from "../config"

type Content = {
  type: "youtube" | "Twitter"
  link: string
  title: string
}

export function useContent() {
  const [contents, setContents] = useState<Content[]>([])

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response = await axios.get(`${Backend_URI}/api/auth/content`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })

        if (isMounted) {
          setContents(prev => {
            const newData = response.data.content

            // only update if changed
            if (JSON.stringify(prev) !== JSON.stringify(newData)) {
              return newData
            }
            return prev
          })
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 3000) // 🔥 3 sec (better)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  return contents
}