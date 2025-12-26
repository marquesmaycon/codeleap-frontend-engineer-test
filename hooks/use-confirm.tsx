import { JSX, useState } from "react"

import { ResponsiveModal } from "@/components/responsive-modal"
import { Button, ButtonProps } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"

type UseConfirmProps = {
  title: string
  actionLabel: string
  variant: ButtonProps["variant"]
}

type UseConfirmReturn = [() => JSX.Element, () => Promise<unknown>]

type StateProps = {
  resolve: (value: boolean) => void
} | null

export const useConfirm = ({
  title,
  actionLabel,
  variant = "default"
}: UseConfirmProps): UseConfirmReturn => {
  const [promise, setPromise] = useState<StateProps>(null)

  const confirm = () => {
    return new Promise((resolve) => {
      setPromise({ resolve })
    })
  }

  const handleClose = () => {
    setPromise(null)
  }

  const handleConfirm = () => {
    promise?.resolve?.(true)
    handleClose()
  }

  const handleCancel = () => {
    promise?.resolve?.(false)
    handleClose()
  }

  const ConfirmationDialog = () => {
    return (
      <ResponsiveModal open={promise != null} onOpenChange={handleClose}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="border-none shadow-none">
          <div className="p-6">
            <h4 className="text-[22px] font-bold">{title}</h4>

            <div className="flex w-full items-center justify-end gap-4 pt-4 md:flex-row">
              <Button onClick={handleCancel} variant="outline">
                Cancel
              </Button>
              <Button onClick={handleConfirm} variant={variant}>
                {actionLabel}
              </Button>
            </div>
          </div>
        </div>
      </ResponsiveModal>
    )
  }

  return [ConfirmationDialog, confirm]
}
