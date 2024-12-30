import { database, storage, ID } from "@/libs/AppWriteClient"
import { text } from "stream/consumers"

const useCreatePost = async (file: File, userId: string, caption: string) => {
    let videoId = Math.random().toString(36).slice(2, 22)

    try {
        await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID),
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_POST),
            ID.unique(),
            {
                user_id: userId,
                text: caption,
                video_url: videoId,
                created_at: new Date().toISOString(),
            }
        )
    } catch (error) {
        throw error
    }
}

export default useCreatePost