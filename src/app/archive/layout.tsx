interface ArchiveLayoutProps {
    archive: React.ReactNode;
    latest: React.ReactNode;
}

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
    return (
        <div>
            <section>
                {archive}
            </section>
            <section>
                {latest}
            </section>
        </div>
    )
}