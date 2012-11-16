use Mojo::UserAgent;
use Time::HiRes qw( gettimeofday tv_interval );

my $ua = Mojo::UserAgent->new;

$t0 = [gettimeofday];
$ua->get('http://search.twitter.com/search.json?q=node')->res->json('/results');
$ua->get('http://search.twitter.com/search.json?q=perl')->res->json('/results');
$ua->get('http://search.twitter.com/search.json?q=mojolicious')->res->json('/results');

$elapsed = tv_interval ( $t0 ) * 1000; 
print "$elapsed ms\n";