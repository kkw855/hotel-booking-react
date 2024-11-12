import { Loader2, XCircle } from 'lucide-react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Button } from '@/components/ui/form/button'
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from '@/components/ui/form/field-wrapper'
import { useToast } from '@/hooks/use-toast'
import { useDeleteImage } from '@/lib/upload-thing/delete-image'
import { UploadButton } from '@/lib/upload-thing/upload-thing'

type ImageUploadProps<T extends FieldValues> = FieldWrapperPassThroughProps &
  UseControllerProps<T> & {
    // image?: string | undefined
    // className?: string
  }

export const ImageUpload = <T extends FieldValues>({
  label,
  description,
  error,
  ...props
}: ImageUploadProps<T>) => {
  const { toast } = useToast()
  const { field } = useController(props)

  const image = field.value

  // console.log('ImageUpload', image)

  const deleteImageMutation = useDeleteImage({
    mutationConfig: {
      onSuccess: () => {
        field.onChange('')

        toast({
          variant: 'success',
          description: 'Image removed',
        })
      },
      onError: () => {
        toast({
          variant: 'destructive',
          description: 'Something went wrong',
        })
      },
    },
  })

  return (
    <FieldWrapper label={label} description={description} error={error}>
      {image ? (
        <div className="relative mt-4 max-h-[400px] min-h-[200px] min-w-[200px] max-w-[400px]">
          <img src={image} alt="Hotel Image" className="object-contain" />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute right-[-12px] top-0"
            disabled={deleteImageMutation.isPending}
            onClick={() => deleteImageMutation.mutate({ imageUrl: image })}
          >
            {deleteImageMutation.isPending ? <Loader2 /> : <XCircle />}
          </Button>
        </div>
      ) : (
        <div className="mt-4 flex w-full flex-col items-center rounded border-2 border-dashed border-primary/50 p-12">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={async (res) => {
              console.log('onClientUploadComplete', res)
              field.onChange(res[0].url)

              toast({
                variant: 'success',
                description: '🎉 Upload Completed',
              })
            }}
            onUploadError={(error: Error) => {
              toast({
                variant: 'destructive',
                description: `ERROR! ${error.message}`,
              })
            }}
          />
        </div>
      )}
    </FieldWrapper>
  )
}
