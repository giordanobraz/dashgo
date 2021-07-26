import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray['500'],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: 'datetime',
    axisBorder: { color: theme.colors.gray['600'] },
    axisTicks: { color: theme.colors.gray['600'] },
    categories: [
      'Wed Jul 21 2021 00:00:00 GMT-0300',
      'Thu Jul 22 2021 00:00:00 GMT-0300',
      'Fri Jul 23 2021 00:00:00 GMT-0300',
      'Sat Jul 24 2021 00:00:00 GMT-0300',
      'Sun Jul 25 2021 00:00:00 GMT-0300',
      'Mon Jul 26 2021 00:00:00 GMT-0300',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: 'series1', data: [57, 36, 13, 59, 6, 19] }];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        maxWidth={1480}
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            padding={['6', '8']}
            bg="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            padding={['6', '8']}
            bg="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
