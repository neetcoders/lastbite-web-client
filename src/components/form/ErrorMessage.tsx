export default function ErrorMessage({ children }: { children: string }) {
    return (
      <div className='flex space-x-1'>
        <p
          className='text-bodytext !leading-tight text-danger-main'
        >
          {children}
        </p>
      </div>
    );
  }