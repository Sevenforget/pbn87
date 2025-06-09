export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            개인정보처리방침
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            이용약관
          </a>
        </div>
      </div>
    </footer>
  )
}
