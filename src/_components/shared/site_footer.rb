class Shared::SiteFooter < Bridgetown::Component
  def initialize(metadata:, resource:)
    @metadata = metadata
    @resource = resource
    @site = Bridgetown::Current.site
  end
end
