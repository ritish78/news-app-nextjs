interface ArchiveLayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function NewsDetailLayout({ children, modal }: ArchiveLayoutProps) {
    return (
        <>
            {modal}
            {children}
        </>
    )
}