export default function PWAModal({ show, onClose, onInstall }: any) {
  const blurBg = show ? "backdrop-blur" : "";
  return (
    show && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white w-94 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2 text-black">
            Install the Astrix App
          </h2>

          <p className="text-sm mb-4 text-black">
            Click the button below to install the app on your device.
          </p>

          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-md h-[40px]"
              onClick={onInstall}
            >
              Install
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 rounded-md h-[40px]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-gray-900 opacity-90 -z-10 ${blurBg}`}
        ></div>
      </div>
    )
  );
}
