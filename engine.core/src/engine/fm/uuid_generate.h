#include <random>
#include <sstream>
#include <iostream>
using namespace std;
/**/
namespace uuid
{
    static std::random_device              rd;
    static std::mt19937                    gen( rd() );
    static std::uniform_int_distribution<> dis( 0, 15 );
    static std::uniform_int_distribution<> dis2( 8, 11 );

    static std::string generate_uuid_v4()
    {
        std::stringstream ss;
        int               i;
        ss << std::hex;
        for ( i = 0; i < 8; i++ )
        {
            ss << dis( gen );
        }
        ss << "-";
        for ( i = 0; i < 4; i++ )
        {
            ss << dis( gen );
        }
        ss << "-4";
        for ( i = 0; i < 3; i++ )
        {
            ss << dis( gen );
        }
        ss << "-";
        ss << dis2( gen );
        for ( i = 0; i < 3; i++ )
        {
            ss << dis( gen );
        }
        ss << "-";
        for ( i = 0; i < 12; i++ )
        {
            ss << dis( gen );
        };
        //
        string ret_str = ss.str();
        std::transform( ret_str.begin(), ret_str.end(), ret_str.begin(), ::toupper );
        return ret_str;
    }
    static std::vector< string > split( const std::string& s, char delim )
    {
        std::vector< string > elems;
        std::stringstream     ss( s );
        std::string           item;
        while ( std::getline( ss, item, delim ) )
        {
            elems.push_back( item );
        }
        return elems;
    }
}